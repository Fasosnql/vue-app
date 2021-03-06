import * as style from './app.scss';
//adapters
import UploadFilesAdapter from 'adapters/upload-files.adapter';

//utils
import readExifData from 'utils/read-exif-data';
import calculateSpeedUpload from 'utils/calculate-speed-upload';

//components
import inputSelect from 'modules/select-file-button/index';
import filesListTable from 'modules/files-list-table/index';
import Button from 'modules/button/index';
import loader from 'modules/loader/index';

//configs
import config from 'configs/config';

export default {
  template: require('./app.html'),
  data: () => ({
    style,
    uploadFilesAdapter: null,
    filesList: [],
    uploading: false,
    uploadsComplete: false,
    loading: false
  }),
  created() {
    this.uploadFilesAdapter = new UploadFilesAdapter();
  },
  methods: {
    onSelect(e) {
      this.loading = true;
      this.uploadFilesAdapter.getFilesList(e.target.files).then((response) => {
        this.filesList = response;
        this.loading = false;
      });
    },
    resetList() {
      this.filesList = [];
    },
    uploadFiles() {
      this.uploading = true;
      const requests = [];

      this.filesList.map((file) => {
        let lastTime;
        let lastUploadedBytes;

        requests.push(
          this.uploadFilesAdapter.uploadFile(file, (e) => {
            const calculatedSpeed = calculateSpeedUpload(file.size, e.totalBytes, lastTime, lastUploadedBytes);
            if (calculatedSpeed) {
              file.speed = calculatedSpeed;
            }
            file.progressData = e;
            lastTime = (new Date()).getTime();
            lastUploadedBytes = e.totalBytes;
          }).then((response) => {
            file.url = response.url;
            file.speed = 0;

            if (response.mimetype === 'image/jpeg') {
              this.uploadFilesAdapter.getExifData(response.handle, {
                policy: config.filestackPolicy,
                signature: config.filestackSignature,
              }).then((response) => {
                file.exifData = readExifData(response.exif);
                file.hasExifData = !!file.exifData.length;
              });
            }
          })
        );
      });

      Promise.all(requests).then(() => {
        this.uploading = false;
        this.uploadsComplete = true;
      });
    },
    newUpload() {
      this.resetList();
      this.uploadsComplete = false;
    }
  },
  components: {
    inputSelect,
    filesListTable,
    Button,
    loader
  }
}

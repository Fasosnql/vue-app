//adapters
import UploadFilesAdapter from 'adapters/upload-files.adapter';

//components
import inputSelect from 'modules/select-file-button/index';
import filesListTable from 'modules/files-list-table/index';
import Button from 'modules/button/index';

export default {
  template: require('./app.html'),
  data: () => ({
    uploadFilesAdapter: null,
    filesList: []
  }),
  created() {
    this.uploadFilesAdapter = new UploadFilesAdapter();
  },
  methods: {
    onSelect(e) {
      this.uploadFilesAdapter.getFilesList(e.target.files).then((response) => {
        this.filesList = response;
      });
    },
    resetList() {
      this.filesList = [];
    },
    uploadFiles() {
      //TODO upload
    }
  },
  components: {
    inputSelect,
    filesListTable,
    Button
  }
}

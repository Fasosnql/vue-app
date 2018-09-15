//adapters
import UploadFilesAdapter from 'adapters/upload-files.adapter';

//components
import inputSelect from 'modules/select-file-button/index';
import filesListTable from 'modules/files-list-table/index';

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
      this.fileList = [];
    }
  },
  components: {
    inputSelect,
    filesListTable
  }
}

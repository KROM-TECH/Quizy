<template>
  <div>
    <Menu></Menu>
    <UploadModal :show="modal" @close="toggleModal"></UploadModal>
    <div class="center">
      <div class="badge badge-dark float-left mt-2"   @click="toggleModal">change</div>
      <div class="col-md-6 grid-margin stretch-card mt-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Upload form</h4>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title d-flex">Dropify
                    <small class="ml-auto align-self-end">
                      <a href="dropify.html" class="font-weight-light" target="_blank">More dropify examples</a>
                    </small>
                  </h4>
                  <div class="dropify-wrapper"><div class="dropify-message"><span class="file-icon"></span> <p>Drag and drop a file here or click</p><p class="dropify-error">Ooops, something wrong appended.</p></div><div class="dropify-loader"></div><div class="dropify-errors-container"><ul></ul></div><input type="file" class="dropify"><button type="button" class="dropify-clear">Remove</button><div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p><p class="dropify-infos-message">Drag and drop or click to replace</p></div></div></div></div>
                </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template> 

<script>
import Menu from "@/components/Menu";
import UploadModal from "@/components/UploadModal";
export default {
  components: {
    Menu,
    UploadModal
  },
  data() {
    return {
      modal:false,
  
    };
  },
  methods: {
    toggleModal(){
      this.modal = !this.modal
    },


  }

};
</script>

<style scoped>
.badge{
  cursor:pointer
}
 
.center {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}

</style>

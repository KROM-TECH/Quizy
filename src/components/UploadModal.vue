<template>
  <div
    v-if="show"
    class="modal fade show"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    style="display: block; background-color:#212529ba;"
  >
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <div style="width:100%">
            <h3 class="modal-title text-center">Select Upload Mode</h3>
            <p class="warning">Please Ensure to save your question before switching Mode</p>
          </div>

          <button
            type="button"
            class="close"
            @click="toggleModal"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div class="badge badge-outline-dark">Form</div>
          <div class="badge badge-outline-primary">Spreadsheet</div>
          <div class="badge badge-outline-success">local upload</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadModal",
  props: ["show"],
  methods: {
    toggleModal() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.warning {
 font-size: 11.5px;
    font-style: italic;
    letter-spacing: 2px;
    color: crimson;
}
.badge{
  cursor:pointer
}
</style>
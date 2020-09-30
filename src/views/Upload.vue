<template>
  <div>
    <Menu></Menu>
    <div class="center">
      <a href="" class="float-left mt-2">Change</a>
      <div class="col-md-6 grid-margin stretch-card mt-3">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center">Upload form</h4>
            <form class="forms-sample">
              <div class="form-group">
                <label for="question">Question</label>
                <input
                  @keyup="grow"
                  type="text"
                  class="form-control"
                  id="question"
                  placeholder="Enter your question"
                />
              </div>
              <div class="form-group">
                <label for="A">Option A</label>
                <input type="Text" class="form-control ans" id="A" placeholder="Answer A" />
              </div>
              <div class="form-group">
                <label for="B">Option B</label>
                <input type="text" class="form-control ans" id="B" placeholder="Answer B" />
              </div>
              <div class="form-group">
                <label for="C">Option C</label>
                <input type="text" class="form-control ans" id="C" placeholder="Answer c" />
              </div>
              <div class="form-group">
                <label for="D">Option D</label>
                <input type="text" class="form-control ans" id="D" placeholder="Answer D" />
              </div>
              <div class="center">
                <button type="submit" class="btn btn-dark mr-2">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="my-5 p-5 card">
        <h4 class="text-center">Available Question on the list</h4>
        <details class="card-header card">
          <summary>1  <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i></summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>Who killed adam ?</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>Google</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>Facebook</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>Microsoft</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>Amazon</p>
            </div>
             
            </div>
        </details>
        <details class="card-header card">
          <summary>2  <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i></summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>Who killed adam ?</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>Google</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>Facebook</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>Microsoft</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>Amazon</p>
            </div>
             
            </div>
        </details>
        <details class="card-header card">
          <summary>3  <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i></summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>Who killed adam ?</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>Google</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>Facebook</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>Microsoft</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>Amazon</p>
            </div>
             
            </div>
        </details>
        <details class="card-header card">
          <summary>4  <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i></summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>Who killed adam ?</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>Google</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>Facebook</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>Microsoft</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>Amazon</p>
            </div>
             
            </div>
        </details>
        <details class="card-header card">
          <summary>5  <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i></summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>Who killed adam ?</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>Google</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>Facebook</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>Microsoft</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>Amazon</p>
            </div>
             
            </div>
        </details>
      
 
     
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data() {
    return {};
  },
  methods: {
    grow(e) {
      console.log(e.nextElementSibling);
    }
  }
};
</script>

<style scoped>
.bo{
  border-top: 1px solid rgba(0, 0, 0, 0.612);
}
details{
  width:17rem;
  border: 1px solid rgba(0, 0, 0, 0.224);
  margin: 2px 0px;
}
summary{
  outline: none;

}
.center {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center
}
.ans{
  border-color: #1c273c !important;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>
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
            <form class="forms-sample" @submit.prevent="addQuestion">
              <div class="form-group">
                <label for="question">Question</label>
                <input
                  v-model="questionInput"
                  type="text"
                  class="form-control"
                  id="question"
                  placeholder="Enter your question"
                  required
                />
              </div>
              <div class="form-group">
                <label for="A">Option A</label>
                <input
                  v-model="optionAInput"
                  type="Text"
                  class="form-control ans"
                  id="A"
                  placeholder="Answer A"
                  required
                />
              </div>
              <div class="form-group">
                <label for="B">Option B</label>
                <input
                  v-model="optionBInput"
                  type="text"
                  class="form-control ans"
                  id="B"
                  placeholder="Answer B"
                  required
                />
              </div>
              <div class="form-group">
                <label for="C">Option C</label>
                <input
                  v-model="optionCInput"
                  type="text"
                  class="form-control ans"
                  id="C"
                  placeholder="Answer c"
                  required
                />
              </div>
              <div class="form-group">
                <label for="D">Option D</label>
                <input
                  v-model="optionDInput"
                  type="text"
                  class="form-control ans"
                  id="D"
                  placeholder="Answer D"
                  required
                />
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
        <details class="card-header card" v-for="(question, index) in Questions" :key="index">
          <summary>
            {{index}}
            <i class="mdi mdi-menu-down float-right" style="color:#1c273c"></i>
          </summary>
          <div class="bo py-2">
            <div>
              <h6>Question</h6>
              <p>{{question.Question}}</p>
            </div>
            <div>
              <h6>Option A</h6>
              <p>{{question.OptionA}}</p>
            </div>
            <div>
              <h6>Option B</h6>
              <p>{{question.OptionB}}</p>
            </div>
            <div>
              <h6>Option C</h6>
              <p>{{question.OptionC}}</p>
            </div>
            <div>
              <h6>Option D</h6>
              <p>{{question.OptionD}}</p>
            </div>
          </div>
        </details>
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
      questionInput:'',
      optionAInput:'',
      optionBInput:'',
      optionCInput:'',
      optionDInput:'',
      Questions: [
        {
          "Question": "Who are you ?",
          "OptionA": "Google",
          "OptionB": "Microsoft",
          "OptionC": "Amazon",
          "OptionD": "Facebook"
        }
      ]
    };
  },
  methods: {
    toggleModal(){
      this.modal = !this.modal
    },

    addQuestion(e){
      e.preventDefault()
      let questionObject = {
          "Question": this.questionInput,
          "OptionA": this.optionAInput,
          "OptionB": this.optionBInput,
          "OptionC": this.optionCInput,
          "OptionD": this.optionDInput
      }
      this.Questions.push(questionObject)
      this.clearForm()
    },
    clearForm(){
          this.questionInput = ""
          this.optionAInput = ""
          this.optionBInput = ""
          this.optionCInput = ""
          this.optionDInput = ""
    }
  }

};
</script>

<style scoped>
.badge{
  cursor:pointer
}
.bo {
  border-top: 1px solid rgba(0, 0, 0, 0.612);
}
details {
  width: 17rem;
  border: 1px solid rgba(0, 0, 0, 0.224);
  margin: 2px 0px;
}
summary {
  outline: none;
}
.center {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.ans {
  border-color: #1c273c !important;
}
details > summary::-webkit-details-marker {
  display: none;
}
</style>

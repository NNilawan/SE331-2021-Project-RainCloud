<template>
  <div class="detail">
    <h2>DOCTOR RECOMMENDATION</h2>
    <div class="review-container">
      <h3>Recommendation:</h3>
      <ul>
        <!-- <DoctorComment
            v-for="review in reviews.id"
              :key="review.id" 
         :id="id"
        /> -->
        <DoctorComment
         :id="id"
        />
        <!-- <DoctorComment
            v-for="(review, id) in reviews" :key="id"/> -->
                    
      </ul>
    </div>

    <form class="review-form" @submit.prevent="onSubmit" >
      <div>
        <label for="name"> Doctor Name: </label>
        <br />
        <input id="name" v-model="name" />
        <br />
        <label for="question"> Doctor would like to comment that:</label>
        <br />
        <textarea id="question" v-model="question"></textarea>
        <br />
        <input class="button" type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import PersonService from "@/services/PersonService.js";
import DoctorComment from "@/components/DoctorComment.vue";
export default {
     components: {
   DoctorComment
 },
  props: ["id"],
  inject: ["GStore"],
  data() {
    return {
      name: "",
      question: "",
      reviews: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.name === "" || this.question === "") {
        alert("Recommend is incomplete. Please fill out every field");
        return;
      }
      let doctorRecommmend = {
        name: this.name,
        question: this.question,
      };
      this.reviews.push(doctorRecommmend);
      if (this.GStore.comment[this.id] == null) {
        this.GStore.comment[this.id] = this.reviews;
      } else {
        this.GStore.comment[this.id].push(doctorRecommmend);
      }
      console.log(this.GStore.comment[this.id])
      this.name = "";
      this.question = "";
    },
  },
  created() {
    PersonService.getPerson(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>



<style>
.menu {
  margin-top: -50px;
}

.detail {
  text-align: center;
}
.my-card {
  max-width: 600px !important;
  width: 100%;
  max-width: 350px;
}
.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
</style>


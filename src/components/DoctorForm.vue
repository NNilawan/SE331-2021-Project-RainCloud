<template>

    <review-form @review-submitted="addReview">
        <form class="review-form" @submit.prevent="onSubmit">
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
    </review-form>
</template> 

<script>

export default {
     data() {
        return {
            name: '',
            question: '',
            time: '',

        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.question === '') {
                alert('Recommend is incomplete. Please fill out every field')
                return
            }
            var today = new Date();
            var time = today.toLocaleTimeString();
            let doctorRecommmend = {
                name: this.name,
                question: this.question,
                time: time,
            }
            this.$emit('review-submitted', doctorRecommmend)
            this.name = ''
            this.question = ''
        }
    }
}
</script>

<style>
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

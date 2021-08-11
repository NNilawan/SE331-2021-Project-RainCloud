
<template>
    <div class="detail">
        <h2>DOCTOR RECOMMENDATION</h2>
        <div class="review-container">
            <h3>Recommendation:</h3>
            <DoctorComment v-if="reviews.length" :reviews="reviews"/>
        </div>
        <div> 
            <DoctorForm @review-submitted="addReview"/>
        </div>
    </div>
</template> 

<script>
import DoctorForm from "@/components/DoctorForm.vue";
import DoctorComment from "@/components/DoctorComment.vue";
export default {
    components: {
        DoctorForm,
        DoctorComment,
    },
     data() {
        return {
            name: '',
            question: '',
            reviews: [],
        }
    },
    methods: {
        addReview(review) {
            this.reviews.push(review)
        }
    }
}
</script>

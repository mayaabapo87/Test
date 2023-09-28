<template>
    <button @click="changeCareerID(name)" class="btn btn-maroon" 
    data-bs-target="#career-details" data-bs-toggle="modal">  
       Details
    </button>

    <div class="modal fade" id="career-details" aria-hidden="true" aria-labelledby="career-detailsLabel" tabindex="0">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                     <div v-for="detail in careers" :key="detail.id">
                        <a v-if="detail.id==this.careerID">
                            <h1 class="modal-title fs-2" id="career-detailsLabel">{{detail.jobname}}</h1>
                            <h2 class="modal-title fs-4">{{detail.location}}</h2>
                        </a>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <h3 class="text-maroon fw-bold"> Job Summary </h3>
                        <div v-for="detail in careers" :key="detail.id">
                            <!-- Make product ID dynamic-->
                            <a v-if="detail.id==this.careerID">
                            <!-- Make product ID dynamic-->
                                <p class="text-dark">{{ detail.summary }}</p>
                                <h3 class="text-maroon fw-bold">Qualifications</h3>
                                <ul v-for="qualification in detail.qualifications" :key="qualification.id">
                                    <li class="text-dark text-start">{{ qualification.quali }}</li>
                                    <ul>
                                        <li v-for="subqualification in qualification.subqualifications" :key="subqualification.id">
                                            <p class="text-start">{{ subqualification.subquali }}</p>
                                        </li>
                                    </ul>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-maroon" data-bs-target="#career-list" data-bs-toggle="modal">View Careers</button>
                    <button class="btn btn-outline-maroon" 
                    data-bs-target="#resume-form" data-bs-toggle="modal">Apply Now</button>
                    <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import careerData from "@/assets/data/careers.json"
import { ref } from 'vue'

const careerID = ref(0)

 export default {
    name: "CareerDetailsPopup",
    props: [
        'name'
    ],
    data() {
        return {
            careerID,
            careers: careerData,
        };
    },
    methods: {
    changeCareerID(newID) {
      this.careerID = newID;
    },
    },
    };
</script>
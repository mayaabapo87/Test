<template>
    <div class="modal fade" id="career-list" aria-hidden="true" aria-labelledby="career-listLabel" tabindex="0">
        <div class="modal-xl modal-dialog-centered modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-2 fw-bold d-none d-lg-block" id="career-listLabel">Careers</h1>  
                    <form class="row   align-items-center mx-auto">
                        <div class="col">
                            <label class="visually-hidden" for="searchInput">Search</label>
                            <div class="input-group">
                                <div class="input-group-text">
                                    <img width="30" height="30" src="@/assets/icons/search.svg" alt="...">
                                </div>
                                <input v-model="searchQuery" type="text" class="form-control" id="searchInput" placeholder="Search...">
                            </div>
                        </div>
                        <div class="col-12">
                            <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                            <div class="input-group">
                                <div class="input-group-text">
                                    <img width="30" height="30" src="@/assets/icons/location.svg" alt="...">
                                </div>
                                <select v-model="selectedLocation" class="form-select" id="career-location">
                                    <option value="1">All</option>
                                    <option v-for="location in workLocations" :key="location" :value="location">{{ location }}</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <button type="button" class="btn-close  d-none d-sm-block" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="height: 1000px; ">
                    <div class="container">
                        <div class="row"> 
                            <div v-for="detail in filteredCareers" :key="detail.id" class="col-lg-4 my-1">   
                                <div class="card border-maroon border-2 h-100" style="width: auto;">
                                    <img width="150" height="150" src="@/assets/icons/join.svg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ detail.jobname }}</h5>
                                        <p class="card-text">{{ detail.location }}</p>
                                    </div>
                                    <CareerDetailsPopup :name="detail.id" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import careerData from "../../assets/data/careers.json"
import CareerDetailsPopup from "./CareerDetailsPopup.vue";
import { ref } from 'vue'

const careerID = ref(0)

export default {
    components:{
        CareerDetailsPopup
    },

    name: "CareerPopup",
    props: [
        'name'
    ],

    data() {
        return {
            careerID,
            careers: careerData,
            selectedLocation: "1",
            searchQuery: ""
        };
    },

    methods: {
 

    },

    computed: {
    workLocations() {
        const uniqueSet = new Set();
        this.careers.forEach((detail) => {
            uniqueSet.add(detail.location);
        });
        return Array.from(uniqueSet);
    },

    searchFunction(){
        const searched = new Set();
        this.searched.forEach((detail) => {
            searched.from(detail.id)
        });
        return Array.from(searched);
    },

    filteredCareers() {
        return this.careers.filter((detail) => {
          const locationMatch = this.selectedLocation === "1" || detail.location === this.selectedLocation;
          
          const searchMatch = 
            (detail.jobname.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
            detail.location.toLowerCase().includes(this.selectedLocation.toLowerCase())) || detail.jobname.toLowerCase().includes(this.searchQuery.toLowerCase());
 
          return locationMatch && searchMatch;
        });
      },

    },
};
</script>

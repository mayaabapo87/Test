<template>
    <div class="modal fade" id="career-details" aria-hidden="true" aria-labelledby="career-detailsLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="career-detailsLabel">Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <h3 class="text-maroon fw-bold"> Job Summary </h3>
                        <div v-for="detail in careers" :key="detail.id">
                            <!-- Make product ID dynamic-->
                            <a v-if="detail.id==3">
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
                    <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import careerData from "../../assets/data/careers.json"

export default {
  data() {
    return {
      careers: careerData,
    };
  },
};
</script>
 
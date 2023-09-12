<template>
    <div class="modal fade" id="partnersPopup" tabindex="-1" aria-labelledby="partners-popupLabel" aria-hidden="true">
        <div class="modal-xl modal-dialog-centered modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title d-none d-lg-block" id="partners-popupLabel">Partners</h5>
                    <form class="row align-items-center mx-auto w-75">
                        <label class="visually-hidden" for="searchInput">Search</label>
                        <div class="input-group">
                            <div class="input-group-text">
                                <img width="30" height="30" src="../../assets/icons/search.svg" alt="...">
                            </div>
                            <input v-model="searchQuery" type="text" class="form-control" id="searchInput" placeholder="Search...">
                        </div>
                    </form>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div v-for="(set, index) in filteredPartners" :key="index" class="col-lg-5 my-1">
                            <div class="card border-1 border h-100">
                                <div class="card-body">
                                    <div class="container text-center">
                                        <img width="150" height="150" :src="require(`../../assets/logos/${set.icon}.svg`)" class="card-img-top" alt="..."/>
                                        <h5 class="card-title text-maroon">{{ set.name }}</h5>
                                        <p class="fs-6 text-dark">{{ set.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import partnerData from "../../assets/data/partners.json";

export default {
    data() {
        return {
        partners: partnerData,
        searchQuery: ""
        };
    },

    computed: {
    filteredPartners() {
        return this.partners.filter((partner) => {          
            const searchMatch =
                partner.name.toLowerCase().includes(this.searchQuery.toLowerCase())
           return searchMatch;
        });
      },

    }
}
</script>
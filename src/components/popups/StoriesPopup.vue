<template>
    <div class="modal fade" id="partners-stories" tabindex="-1" 
    aria-labelledby="partners-popupLabel" aria-hidden="true">
        <div class="modal-xl modal-dialog-centered modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="partners-popupLabel">Stories</h5>               
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-for="(set, index) in stories" :key="index" style="height: 100%;">
                        <div class="my-2" style="height: 100%;">
                            <div class="card">
                                <div class="card-body">
                                    <div class="text-center">
                                        <p class="text-dark">{{ set.story }}</p>
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
import storiesData from '../../assets/data/stories.json'

export default{
    data() {
        return {
            stories: storiesData,
        };
    },
}
</script>
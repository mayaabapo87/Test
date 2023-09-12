<template>
    <div class="modal fade" id="resume-form" aria-hidden="true" aria-labelledby="resume-formLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-2 fw-bold" id="resume-formLabel">Resume</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <form class="w-75 mx-auto">

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/person.svg" class="card-img-top" alt="...">
                                </span>
                                <input type="text" class="form-control" placeholder="Full Name" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/envelope.svg" class="card-img-top" alt="...">
                                </span>
                                <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img width="40" height="40" src="../../assets/icons/telephone.svg" class="card-img-top" alt="...">
                                </span>
                                <input type="text" class="form-control" placeholder="09xxxxxxxx" aria-label="Username" aria-describedby="basic-addon1">
                            </div>

                            <div class="container allign-items-center text-center justify-items-center border rounded py-2">
                                <label for="formFileLg" class="form-label">
                                    <img width="50" height="50" src="../../assets/icons/upload.svg" class="card-img-top" alt="...">
                                </label>
                                <input class="form-control" id="formFileLg" type="file">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-maroon" data-bs-target="#" data-bs-toggle="modal">Send</button>
                    <button class="btn btn-maroon" data-bs-dismiss="modal" aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
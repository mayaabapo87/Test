<template>
    <div class="modal fade" id="contact-form" tabindex="-1" 
        aria-labelledby="partners-popupLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl   ">
            <div class="modal-content">
                <!--Desktop-->
                <div class="d-none d-xl-block">
                    <div class="modal-header mx-3">
                        <h5 class="modal-title text-maroon border rounded border-2 border-maroon p-2 fs-2" id="contact-formLabel">Contact</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body m-3">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Juan Delacruz">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Phone Number</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="09xxxxxxxx">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="messageForm" class="form-label text-dark fs-5">Message</label>
                                    <textarea class="form-control" id="messageForm" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Send</button>
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>

                <!--Tablet-->
                <div class="d-none d-sm-block d-xl-none d-xxl-none">
                    <div class="modal-header mx-3">
                        <h5 class="modal-title text-maroon border rounded border-2 border-maroon p-2 fs-2" id="contact-formLabel">Contact</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body m-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Juan Delacruz">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Phone Number</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="09xxxxxxxx">
                        </div>
                        <div class="mb-3">
                            <label for="messageForm" class="form-label text-dark fs-5">Message</label>
                            <textarea class="form-control" id="messageForm" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Send</button>
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>

                <!--Mobile-->
                <div class="d-inline d-block d-sm-none">
                    <div class="modal-header mx-3">
                        <h5 class="modal-title text-maroon border rounded border-2 border-maroon p-2 fs-2" id="contact-formLabel">Contact</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body m-3">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Name</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Juan Delacruz">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Phone Number</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="09xxxxxxxx">
                        </div>
                        <div class="mb-3">
                            <label for="messageForm" class="form-label text-dark fs-5">Message</label>
                            <textarea class="form-control" id="messageForm" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Send</button>
                        <button type="button" class="btn btn-maroon" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
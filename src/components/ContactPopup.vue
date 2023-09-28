<template>
    <div class="modal fade" id="contactForm" tabindex="-1" aria-labelledby="contactFormLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
        modal-fullscreen-md-down">
            <div class="modal-content ">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Contact</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
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
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label text-dark fs-5">Phone Number</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="09xxxxxxxx">
                                </div>
                            </div>
                            </div>
                         
                    </div>
                    <div class="container mb-5" style="height: 200px;">
                        <label for="messageForm" class="form-label text-dark fs-5">Message</label>
                        <textarea class="form-control" id="messageForm" rows="3" style="height: 100%; resize: none;"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-maroon">Send</button>
                    <button type="button" class="btn btn-outline-maroon" data-bs-dismiss="modal">Close</button>
                </div> 
            </div>
        </div>
    </div>
</template>
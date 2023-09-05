<template>
    <button class="btn btn-outline-maroon" 
    data-bs-target="#career-list" data-bs-toggle="modal">View All</button>

    <div class="modal fade" id="career-list" aria-hidden="true" aria-labelledby="career-listLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="career-listLabel">Careers</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">    
                    <div class="d-flex flex-row my-4">
                        <div class="card border-dark border-2 mx-2 w-50">
                            <div class="card-body text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" 
                                fill="currentColor" class="bi bi-truck" 
                                viewBox="0 0 16 16"> <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                                <h2 class="card-title fw-bold">Service Delivery Manager</h2>
                                <p class="card-text">Makati</p>
                                <button class="btn btn-dark
                                position-absolute top-100 start-50 translate-middle">DETAILS</button>
                            </div>
                        </div>
                          
                        <div class="card border border-dark border-2 mx-2 w-50">
                            <div class="card-body text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill=" " class="bi bi-code-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
                                </svg>
                                <h2 class="card-title fw-bold">Mid-Level Software Developer</h2>
                                <p class="card-text">Makati, CDO</p>
                                <button class="btn btn-dark
                                position-absolute top-100 start-50 translate-middle">DETAILS</button>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-row my-4">
                    <div class="card border-dark border-2 mx-2 w-50">
                        <div class="card-body text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <h2 class="card-title fw-bold">Business Analyst</h2>
                            <p class="card-text">Makati</p>
                            <button class="btn btn-dark
                            position-absolute top-100 start-50 translate-middle">DETAILS</button>
                        </div>
                    </div>

                    <div class="card border border-dark border-2 mx-2 w-50">
                        <div class="card-body text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
                            </svg>
                            <h2 class="card-title">Product Specialist</h2>
                            <p class="card-text">Makati</p>
                            <button class="btn btn-dark
                            position-absolute top-100 start-50 translate-middle">DETAILS</button>
                        </div>
                    </div>
                </div>

                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" data-bs-target="#career-details" data-bs-toggle="modal">Details</button>
                </div>
            </div>
        </div>
    </div>

     
</template>
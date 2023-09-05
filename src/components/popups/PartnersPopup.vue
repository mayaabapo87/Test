<template>
    <button type="button" class="btn btn-outline-maroon" 
    data-bs-toggle="modal" data-bs-target="#partners-popup">
    View All</button>

    <div class="modal fade" id="partners-popup" tabindex="-1" 
    aria-labelledby="partners-popupLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="partners-popupLabel">Partners</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body mx-3 my-3">
                        <div class="row my-3 ">
                            <div class="container d-flex flex-column align-items-center border border-secondary">
                                <h3>Philippine Seven Corporation</h3>
                                <p class="w-50">The largest convenience store chain in the Philippines.</p>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="container d-flex flex-column align-items-center border border-secondary">
                                <h3>Cargo Data Exchange Center, Inc.</h3>
                                <p class="w-50">Innovates and explores information technology to capture and maintain the e-business 
                                    market in the Philippines and to provide new services in the e-Commerce sector.</p>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="container d-flex flex-column align-items-center border border-secondary">
                               
                                <h3>First MFI Network</h3>
                                <p class="w-50">It aims to create systems and tools to make microfinance processes more efficient and 
                                    convenient through the use of social networks, the Internet, retail outlets, 
                                    electronic wallets, and mobile technology.</p>
                            </div>
                        </div>
                        <div class="row my-3">
                            <div class="container d-flex flex-column align-items-center border border-secondary">
                                <h3>Pipol Konek</h3>
                                <p class="w-50">The Philippine government has an ambitious program to provide free public Wi-Fi to all citizens in all 
                                    public places in the country underpinned by legislation that passed in 2017 
                                    that mandates the governments Department of Information and Communications (DICT) to implement the 
                                    Free Public Internet Access Program.</p>
                            </div>
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
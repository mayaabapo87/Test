<template>
    <div class="wrapper">
        <h3>History</h3>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-content">
                    <h4>1993</h4>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <p>Offers BSCS and BSIS (under SBM)</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <h4>2018</h4>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <p>Offers BS EMC-DAT</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <h4>August 2021</h4>
                </div>
            </div>
        </div>
        <div class="line">
        <div class="circles">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </div>
    </div>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-content">
                    <p>CCS starts under CoE</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <h4>2011</h4>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <p>Offers BSIT</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <h4>Early 2021</h4>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <p>Offers MIT</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'HistoryBox'
}
</script>

<style scoped>
.wrapper{
    max-height: 100%;
    max-width: 100%;
    margin: 60px 18.5% 0px 18.5%;
    align-items: center;
    text-align: center;
}
.line {
  border-bottom: 4px solid var(--light);
  width: 80%;
  margin: -5px auto 15px auto;
}
.circles {
  position: relative;
  top: 12px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.circle {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 4px solid var(--light);
  background-color: var(--white);
}
.timeline {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: auto;
  align-items: center;
}
.timeline-item {
    width: 300px;
    position: relative;
}
.timeline-content {
    bottom: 0;
    font-family: var(--text);
}
.timeline-content h4 {
    font-weight: 700;
    font-size: 23px;
    text-align: center;
    text-transform: uppercase;
    color: var(--prime);
}
.timeline-content p {
    font-weight: 400;
    font-size: 23px;
    
    text-align: center;
}
h3{
    font-family: var(--header);
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    letter-spacing: 0.095em;
    color: var(--prime);
    text-transform: uppercase;
}
</style>
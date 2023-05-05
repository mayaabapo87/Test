<template>
    <div class="wrapper">
      <div class="header">
          <div class="ccs">
            <img id="logo" src="./assets/ccs.png" alt="CCS logo" >
            <div class="text">
              <h3>
                XU - CCS
              </h3>
              <h4>
                College of Computer Studies
              </h4>
            </div>
          </div>
          <div class="options">
            <div class="uplinks">
              <div class="search"><img src="./assets/search.svg"><img></div>
              <button>give to ccs</button>
            </div>
            <div class="links">
              <button>Course Offerings</button>
              <button>About</button>
              <button>Events</button>
              <button>Faculty</button>
              <button>Enrollment</button>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SiteHeader'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .options{
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: end;
    overflow: hidden;
  }
  .uplinks{
    display: flex;
    align-items: center;
  }
  .uplinks button{
      width: 140px;
      height: auto;
      background-color: var(--acc);
      border-radius: 3px;
      border: none;
      outline: none;
      transition-duration: 0.2s;
      padding: 10px 0;
      font-family: var(--text);
      font-weight: 600;
      color: var(--white);
      font-size: 16px;
      text-transform: uppercase;
  }
  .uplinks button:hover{
      cursor: pointer;
      background-color: var(--dacc);
  }
  .search{
    padding: 0 20px 4px 20px;
      width: 22px;
      height: 21px;
  }
  .links button{
    font-family: var(--text);
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    background-color: var(--prime);
    color: var(--white);
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 20px;
    transition-duration: 0.3s;
  }
  .links button:hover{
    color: var(--acc);
  }
  .links{
    padding: 15px 0px 0px 100px;
    border-top: 1px solid var(--light);
    text-align: right;
    font-size: 16px;
  }
  .wrapper{
    box-sizing: border-box;
    height: auto;
    background-color: var(--prime);
  }
  .header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-left: 18.5%;
    margin-right: 18.5%;
    height: 120px;
    justify-content: space-between;
  }
  .ccs{
    height: 100%;
    overflow: hidden;
    display: flex;
    width: 420px;
    align-items: center;
    float: left;
  }
  .ccs img{
    height: 92px;
    float: left;
    margin-right: 10px;
  }
  .text {
    display: inline-block;
    align-items: center;
    color: var(--white);
  }
  .text h3 {
    margin-top: 10px;
    font-family: var(--header);
    letter-spacing: -0.035em;
    font-weight: bold;
    font-size: 48px;
  }
  .text h4 {
    margin-top: -58px;
    font-family: var(--text);
    font-size: 15.5px;
    font-weight: 300;
  }
  a {
    color: var(--acc);
  }
  </style>
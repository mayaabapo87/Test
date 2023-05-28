
<template>
  <div class="q-pa-md">
    <q-card class="box" flat bordered v-for="pass in passes" :key="pass._id">
      <q-card-section style="padding: 0">
        <div class="header">
          <div id="id">
            {{ pass._id }}
          </div>

          <div class="date">
            {{ formatDate(pass.created) }}
          </div>
        </div>

        <div class="header" style="margin-bottom: 8px">
          <div id="subheader">
            Requested by <strong>{{ pass.req.name }}</strong>
          </div>
          
          <div id="subheader" style="font-size: 15px; margin-top: -3px;">
            <strong>{{ formatTime(pass.created) }}</strong>
          </div>
        </div>

      <q-tabs v-model="tabRefs[pass._id]" class="text-darkblue">
        <q-tab label="Overview" name="a" />
        <q-tab label="Particulars" name="b" />
        <q-tab v-if="pass.approvalStatus == 'unapproved'" label="Tracking" name="c" />
      </q-tabs>
      </q-card-section>

      <q-separator />

      <q-tab-panels v-model="tabRefs[pass._id]" animated>
        <q-tab-panel style="padding: 20px 0 0 0" name="a">
          <div class="nature">
            <div class="entry" v-for="(entry, key) in pass.nature" :key="key">
              <div id="bottom">
                {{ fieldNames[key] || key }}: 
              </div>

              <div id="top">
                {{ fieldNames[entry] || entry }}
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel style="padding: 20px 0 0 0" name="b">
          <div class="item_wrap">
            <div class="wrap_box" v-for="(entry, key) in pass.ptcs" :key="key">
              <div v-for="(value, prop) in entry" :key="prop">
                <div style="display: flex; flex-direction: row; align-items: center;" v-if="prop !== '_id' && prop !== 'tag' ">
                  
                  <div id="bottom">
                    {{ fieldNames[prop] || prop }}: 
                  </div>

                  <div id="top">
                    {{ fieldNames[value] || value }}
                  </div> 

                </div>
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel style="padding: 20px 0 0 0; text-align: center" name="c">
            <span id="item" v-html="pass.unapprovedItems.join('<br>')">
            </span>
        </q-tab-panel>
      </q-tab-panels>

      <div class="b_wrap">
        <div :class="['status', { 'success': pass.approvalStatus == 'approved', 'error': pass.approvalStatus == 'unapproved' }]">
          
          <div v-if="pass.approvalStatus == 'approved'">
            <div id="s_label">{{ pass.approvalStatus }}</div>
          </div>
          
          <div v-else-if="pass.approvalStatus == 'unapproved'">
            <div id="s_label">{{ pass.approvalStatus }}</div>
          </div>
        </div>

        <div style= "display: flex; flex-direction: row;">
          <div v-if="pass.reqs_uploaded == false">
            <UploadButton :passId="pass._id"/>
          </div>
          <div v-else-if="pass.reqs_uploaded == true">
            <ViewButton :passId="pass._id"/>
          </div>

          <!-- <div class="square_btn" @click="pass.showAllItems = !pass.showAllItems">
            <img style="height: 17px; width: 17px;" v-if="!pass.showAllItems" src="../assets/plus.png">
            <img style="height: 17px; width: 17px;" v-else src="../assets/minus.png">
          </div> -->
          
        </div>
      </div>

    </q-card>
  </div>
</template>

<script>
import { api } from 'boot/axios-config.js';

import fieldNames from '@/../../../server/fieldNames.js'
import UploadButton from './UploadButton';
import ViewButton from './ViewButton';


export default {
  name: 'PassApproval',
  components: {
    UploadButton,
    ViewButton,
  },

  data() {
    return {
      passes: [],
      unapprovedItems: [],
      tabRefs: {},
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    },

    formatTime(date) {
      return new Date(date).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      })
    },

    checkApproval(pass) {
      api.get(`/passes/check_approval/${pass._id}`)
        .then(response => {
          if (response.data.message === 'approved') {
            pass.approvalStatus = response.data.message;
            pass.unapprovedItems = [];
          } else if (response.data.message === 'unapproved') {
            pass.approvalStatus = response.data.message;
            pass.unapprovedItems = response.data.unapprovedItems;
          } else {
            pass.approvalStatus = 'Error in retrieving pass data!';
            pass.unapprovedItems = [];
          }
        })
        .catch(error => {
          console.log(error);
          pass.approvalStatus = '';
          pass.unapprovedItems = [];
        });
    },
    
    getAllPasses() {
      api.get('/passes')
        .then(response => {
          this.passes = response.data;
          this.passes.forEach(pass => {
            this.checkApproval(pass);
          });

          this.passes.sort((a, b) => new Date(b.created) - new Date(a.created));
        })
        .catch(error => {
          console.log(error);
        });
    },
  },

  created() {
    try {
      this.getAllPasses(); // Initial retrieval of passes

      // Retrieve passes every 5 minutes
      setInterval(() => {
        try {
          this.getAllPasses();
        } catch (error) {
          console.error(error);
          alert("Error retrieving passes!");
        }
      }, 5 * 60 * 1000); // 5 minutes in milliseconds
    } catch (error) {
      console.error(error);
      alert("Error retrieving passes!");
    }
  },

  computed: {
    fieldNames() {
      return fieldNames;
    }
  },
}
</script>

<style lang="sass" scoped>
.entry
  align-items: center
  background-color: #eff0f1
  border-radius: 8px
  border: var(--borGrey)
  display: flex
  flex-direction: row
  margin: 0 0 3px 0
  padding: 16px 18px
  width: auto

.fHeader
  font-size: 17px
  font-weight: bold
  text-align: center
  margin: 20px 0 10px 0
  text-transform: uppercase

.entry:last-child
  margin: 0

#top
  font-size: 15px
  font-weight: bold
  margin: 0

#bottom
  width: auto
  font-size: 13px
  text-transform: uppercase
  color: #4a4a4d
  margin-right: 5px

.b_wrap
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-top: 15px

.item_wrap
  display: flex
  flex-wrap: wrap
  justify-content: space-between

.wrap_box
  background-color: #eff0f1
  border: var(--borGrey)
  border-radius: 6px
  flex-grow: 1
  font-size: 15px
  margin: 0 2.5px 5px 2.5px
  padding: 14px 16px

.wrap_box:first-child
  margin: 0 2.5px 5px 0 !important

.wrap_box:nth-child(n+2)
  margin: 0 0 5px 2.5px  !important

.wrap_box:only-child
  margin: 0

.wrap_box:nth-child(n+3)
  margin-left: 0 !important

#details
  background-color: #dbdce2
  border: 0
  color: var(--tColor2)
  border-radius: 8px
  box-sizing: border-box
  font-family: var(--text)
  font-size: 15px
  padding: 6px 12px
  text-transform: uppercase
  transition: 0.2s

#details:hover
  background-color: #b9bac9
  color: #fff
  cursor: pointer

.header
  align-items: center
  display: flex
  justify-content: space-between
  width: auto
  margin-bottom: -2px

.date
  font-weight: bold
  text-transform: uppercase

#item
  margin-bottom: 5px
  color: #7a1d26
  text-align: center
  font-size: 15px

#label
  font-size: 18px
  font-weight: bold
  text-align: center
  text-transform: uppercase

#id
  font-size: 20px
  font-weight: bold

#subheader
  font-size: 14px
  text-transform: uppercase
  color: var(--tColor1)

.status.success
  background-color: #6bca49
  color: #ffffff

.status.error
  background-color: #fae3e3
  border: 1px solid #d41b2a
  color: #d41b2a

#s_label
  font-size: 14px
  font-weight: bold
  text-align: left
  text-transform: uppercase

.status
  box-sizing: border-box
  border-radius: 8px
  padding: 7px 12px
  margin-right: 5px
  width: 40%

.box
  border-radius: 8px
  border: var(--borGrey)
  box-sizing: border-box
  height: auto
  margin-top: 30px
  padding: 20px
  text-align: left
  width: 500px
</style>

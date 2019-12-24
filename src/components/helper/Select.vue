<template>
      <v-select @change="changeChartData" class="select_class" rounded :style="{'max-width': width}" :items="items" :value.sync="selected" :label="label" solo> </v-select>  
</template>


<script>

import {mapMutations}  from 'vuex';
export default {
    props:['items','label','width','type'],
    data(){
        return {
           selected:'',
        }
    },
    methods:{
        ...mapMutations(['setSelectedMonth','setSelectedYear']),
        changeChartData(val) {
            console.log(val);
            console.log(this.type);
            if(this.type === 'month') {
              this.setSelectedMonth(val);
            }

            if(this.type === 'year') {
                this.setSelectedYear(val);
            }
           //render chart dtaa on selecte tag value
           
        }
    }
}
</script>

<style>
  .chart_container .v-toolbar .v-toolbar__content .v-toolbar__items .v-input {
    margin:0 5px !important;
  }
  .select_class.v-text-field.v-text-field--solo .v-input__control {
      min-height:36px !important;
  }
  .select_class.theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
      border-radius: 4px !important;
      margin-bottom:0;
      box-shadow: none !important;
      border: 1px solid #e4e4e4;
  }
</style>
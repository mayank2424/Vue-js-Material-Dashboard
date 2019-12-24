import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function iState() {
    return  {
        app:{
            drawer:null,
            theme:'',
            selectedMonth:'January',
            selectedYear:'2001',
            recentlyViewed:[]
        },
        
    }
}
export default new Vuex.Store({
    namespace:true,
    state:iState,
    mutations:{
       setDrawer:(state, payload)  => {
           console.log("payload",payload)
          state.app.drawer = payload;
       },
       toggleDrawer: (state,payload) => {
              state.app.drawer =  !state.app.drawer;
       },
       setSelectedMonth: (state,payload) => {
           state.app.selectedMonth = payload;
           state.app.selectedYear = '2001';
           console.log(state.app.selectedMonth);
       },
       setSelectedYear: (state,payload) => {
           state.app.selectedYear = payload;
       },
       setRecentlyViewed: (state,payload) => {
           if(state.app.recentlyViewed.includes(payload.name)) {
               console.log("already present")
           }
           else {
           state.app.recentlyViewed.push(payload.name)
           }
        }
    },

    actions: {

    },
    getters :{
          selectedMonthinVisitors:state => state.app.selectedMonth,
          selectedYearinVisitors: state => state.app.selectedYear,
          getRecentActivityData:state => state.app.recentlyViewed
    }
})
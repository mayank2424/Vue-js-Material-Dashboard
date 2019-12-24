<template>
  <v-toolbar
    id="core-toolbar"
    app
    flat
    prominent
    style="background: #fff;border-bottom:1px solid #e2e2e2"
  >
    <div class="v-toolbar-title">
      <v-toolbar-title
        class="tertiary--text font-weight-normal"
      >
        <v-btn
          v-if="responsive"
          class="default v-btn--simple ham_icon"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>

    <v-spacer />
    <v-toolbar-items>
      <v-flex
        align-center
        layout
        py-2
      >
       <Select :items="appLang" label="Eng" width="80px"/>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
  
</template>

<script>

import {
  mapActions,
  mapGetters,
  mapMutations
} from 'vuex'


import Select from '../helper/Select';
export default {
  components:{
     Select
  },
  data: () => ({
   
    title: null,
    responsive: false,
    appLang:['Eng', 'Chi','Jap']
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
       console.log(val);
       //add visited tabs to recentyl viewed
       this.setRecentlyViewed(val);
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer','setRecentlyViewed']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    //   this.toggleDrawer()
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }

  .ham_icon {
      color:#585555 !important;
  }
</style>

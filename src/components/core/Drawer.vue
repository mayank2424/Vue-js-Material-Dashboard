<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    persistent
    mobile-break-point="991"
    width="260"
    style="box-shadow:none !important"
  >
    <v-layout class="fill-height" column>
      <v-list-tile class="first_header">
        <v-list-tile-title style="text-align:center" class="title">
          <v-icon>mdi-home</v-icon>
        </v-list-tile-title>
      </v-list-tile>
      <v-divider />
      <v-list class="drawer_header">
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.png"
              class="profile_img"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content class="drawer_profile">
            <v-list-item-title class="user_title"
              >Martha Blair</v-list-item-title
            >
            <v-list-item-subtitle
              style="color:grey;font-size:0.9rem;font-weight:normal"
              >Developer</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <div class="drawer_tabs">
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon class="icon_class">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="drawer_list_title" v-text="link.text" />
        </v-list-tile>
      </div>


      <div class="last_tab_drawer">
          <v-flex class="recent_activity">

              <v-list-tile style="height:30px !important">
                  <v-list-tile-title class="recent_title">Recently Viewed</v-list-tile-title>
              </v-list-tile>
              <v-list-tile v-for="item in getRecentActivityData" :key="item" class="recent_tabs">
                  <v-list-tile-title>{{item}}</v-list-tile-title>
                  <v-icon class="recent_icon">mdi-arrow-right</v-icon>
              </v-list-tile>
<!-- 
               <v-list-tile class="recent_tabs">
                  <v-list-tile-title>{{}}</v-list-tile-title>
                  <v-icon class="recent_icon">mdi-arrow-right</v-icon>
              </v-list-tile>

              <v-list-tile class="recent_tabs">
                  <v-list-tile-title>Customer</v-list-tile-title>
                  <v-icon class="recent_icon">mdi-arrow-right</v-icon>
              </v-list-tile> -->
          </v-flex>
      </div>

      <!-- <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template>
              <v-list-item-title>Admin</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list-group> -->
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    logo: "favicon.ico",
    links: [
      {
        to: "/",
        icon: "mdi-view-dashboard",
        text: "Dashboard"
      },
      {
        to: "/calendar",
        icon: "mdi-calendar-blank",
        text: "Calendar"
      },
      {
        to: "/inbox",
        icon: "mdi-mailbox-open-up-outline",
        text: "Inbox"
      },
      {
        to: "/invoicing",
        icon: "mdi-receipt",
        text: "Invoicing"
      },
      {
        to: "/lab-exp",
        icon: "mdi-test-tube",
        text: "Lab/Experimental"
      }
    ]
  }),
  computed: {
    ...mapState(["image", "color"]),
    ...mapGetters(["selectedMonthinVisitors","getRecentActivityData"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    },
    items() {
      return this.$t("Layout.View.items");
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  }
};
</script>

<style>
.drawer_profile {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.drawer_header {
  display: flex;
  flex-flow: column;
  justify-content: center;
  background: #fff !important;
  padding: 25px 0 !important;
}
.profile_img {
  width: 40%;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 10px;
}
.user_title {
  font-size: 1rem;
  font-weight: 600;
}
.first_header {
  padding: 7.9px 0 !important;
}
.drawer_list_title {
  font-size: 1rem !important;
  font-weight: 500;
}
.drawer_tabs {
    padding:10px  15px;
}
.v-list-item > .primary--text {
    color: #0c64db !important;
}
.v-list-item a{
    border-bottom: 1px solid #e4e4e4;
}
.v-list__tile__action {
    min-width:45px !important;
}
.icon_class {
    /* color:#a0a0a8 !important; */
}
.recent_activity {
    padding:10px 15px;
}
.recent_title {
    color: #92989b;
      font-size:0.9rem !important;
      font-weight: 500 !important;
      text-transform: uppercase;
}
.recent_tabs {
    height:30px !important;
}
.recent_icon {
    font-size:14px !important;
}
.recent_tabs .v-list__tile__title {
    font-size:1rem !important;
    color: #414349 !important;
    font-weight:normal
}
</style>

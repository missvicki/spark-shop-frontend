<template>
  <f7-app :params="f7params">
    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar></f7-statusbar>
    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import cordovaApp from "../js/cordova-app.js";
import routes from "../js/routes.js";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        id: "com.smartcart.ak47", // App bundle ID
        name: "SmartCart", // App name
        theme: "auto", // Automatic theme detection

        // App routes
        routes: routes,

        touch: {
          fastClicks: true,
          disableContextMenu: true,
          materialRipple: false
        },

        actions: {
          backdrop: false
        },

        navbar: {
          mdCenterTitle: true,
          iosCenterTitle: true
        },

        view: {
          pushState: false,
          animate: true,
          mdSwipeBackAnimateShadow: true,
          stackPages: true
        },

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          enabled: true,
          overlay: (this.$device.cordova && this.$device.ios) || "auto",
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
          scrollTopOnClick: true,
          materialBackgroundColor: "#0B2161",
          iosBackgroundColor: "#0B2161"
        }
      }
    };
  },

  mounted() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
};
</script>
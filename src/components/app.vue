<template>
    <f7-app :params="f7params">
        <!-- Status bar overlay for fullscreen mode-->
        <f7-statusbar></f7-statusbar>

        <!-- Left panel with cover effect-->
        <f7-panel left cover>
            <f7-view>
                <f7-page>
                    <f7-navbar title="Left Panel"></f7-navbar>
                    <f7-block>Left panel content goes here</f7-block>
                </f7-page>
            </f7-view>
        </f7-panel>


        <!-- Your main view, should have "view-main" class -->
        <f7-view main class="safe-areas" url="/"></f7-view>

    </f7-app>
</template>
<script>

    import routes from '../js/routes.js';

    export default {
        data() {
            return {
                // Framework7 Parameters
                f7params: {
                    id: "com.sparkshop.sparks", // App bundle ID
                    name: "SparkShop", // App name
                    theme: "auto", // Automatic theme detection
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
                    // App routes
                    routes: routes,
                    // Input settings
                    input: {
                        scrollIntoViewOnFocus: !!this.$device.cordova,
                        scrollIntoViewCentered: !!this.$device.cordova
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
                },
            }
        },
        mounted() {
            this.$f7ready((f7) => {

                // Call F7 APIs here
            });
        }
    }
</script>

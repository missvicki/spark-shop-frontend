<template>
  <f7-page name="about">
    <f7-navbar title="About"></f7-navbar>
    <f7-block-title>Processing Payment...</f7-block-title>
    <f7-block>
      <p>Please Enter Yo PIN to Confirm Payment...</p>
      <p>
        <span class="progressbar-infinite color-multi"></span>
      </p>
    </f7-block>
  </f7-page>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cart"])
  },
  mounted() {
    const self = this;
    const app = self.$f7;
    const $router = self.$f7router;

    const notificationFull = app.notification.create({
      icon: '<i class="icon demo-icon">7</i>',
      title: "PAYMENT SUCCESSFUL",
      titleRightText: "now",
      subtitle: "Payment Received!",
      text: "Thanks for shopping with us!",
      closeTimeout: 5000
    });

    const PAYMENT_CHECKER =
      "https://alphadoctorsltd.com/admin/api/v2/index.php/hackathon-payment-checker";

    const checkInterval = setInterval(() => {
      app.request.promise.get(PAYMENT_CHECKER).then(response => {
        const data = JSON.parse(response);

        if (data.status === "successful") {
          notificationFull.open();

          self.cart.forEach(item =>
            self.$store.dispatch("removeFromCart", item.code)
          );

          clearInterval(checkInterval);
          $router.navigate({ name: "dashboard" });
        }
      });
    }, 2000);
  }
};
</script>

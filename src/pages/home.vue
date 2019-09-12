<template>
  <f7-page name="home">
    <div v-if="showShopBtn" class="image-container">
      <f7-row>
        <f7-col>
          <div
            class="elevation-demo elevation-10 elevation-hover-24 elevation-pressed-12 elevation-transition"
            @click="StartShopping"
          >
            START SHOPPING
          </div>
        </f7-col>
      </f7-row>
    </div>
    <div v-if="!showShopBtn">
      <div class="list media-list">
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            <a href="#" class="item-link item-content">
              <div class="item-media">
                <img :src="`${require('../images/cart.png')}`" width="80" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{ item.name }}</div>
                  <div class="item-after">{{ item.price | AddUGX }}</div>
                </div>
                <div class="item-subtitle">
                  <button class="col button button-fill button-small">
                    Remove
                  </button>
                </div>
              </div></a
            >
          </li>
          <li class="item-divider">
            TOTAL COST: &nbsp;&nbsp;<b>{{ totalCost | AddUGX }}</b>
          </li>
        </ul>
      </div>
    </div>
    <f7-block v-if="!showShopBtn">
      <p>
        <f7-button fill sheet-open=".demo-sheet-swipe-to-step"
          >Check Out</f7-button
        >
      </p>
    </f7-block>
    <!-- Swipe to step demo sheet -->
    <f7-sheet
      class="demo-sheet-swipe-to-step"
      style="height:auto; --f7-sheet-bg-color: #fff;"
      swipe-to-close
      swipe-to-step
      backdrop
    >
      <!-- Initial swipe step sheet content -->
      <div class="sheet-modal-swipe-step">
        <div
          class="display-flex padding justify-content-space-between align-items-center"
        >
          <div style="font-size: 18px"><b>Total:</b></div>
          <div style="font-size: 22px">
            <b>{{ totalCost | AddUGX }}</b>
          </div>
        </div>
        <div class="padding-horizontal padding-bottom">
          <f7-button large fill>Make Payment</f7-button>
          <div class="margin-top text-align-center">
            Swipe up for more details
          </div>
        </div>
      </div>
      <!-- Rest of the sheet content that will opened with swipe -->
      <f7-block-title medium class="margin-top">Your order:</f7-block-title>
      <div class="list no-hairlines">
        <ul>
          <li class="item-content" v-for="(item, index) in cart" :key="index">
            <div class="item-inner">
              <div class="item-title">{{ item.name }}</div>
              <div class="item-after text-color-black">
                <b>{{ item.price | AddUGX }}</b>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </f7-sheet>
  </f7-page>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    showShopBtn: true
  }),
  methods: {
    StartShopping() {
      const self = this;
      if (window.cordova) {
        QRScanner.scan(displayContents);

        function displayContents(err, text) {
          if (err) {
            console.error(err);
          } else {
            alert(text);
            self.showShopBtn = true;
          }
        }

        QRScanner.show();
      }
    }
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalCost"])
  },
  mounted() {
    const self = this;
    const app = self.$f7;

    if (window.cordova) {
      QRScanner.prepare(onDone); // show the prompt

      function onDone(err, status) {
        if (err) {
          console.error(err);
        }
        if (status.authorized) {
          app.dialog.alert("Ready To Shop now!", "Awesome!");
        } else if (status.denied) {
          QRScanner.openSettings();
        } else {
          QRScanner.prepare(onDone);
        }
      }
    }
  }
};
</script>

<style scoped>
.page {
  background: lightgray;
}

.item-divider {
  display: flex;
  justify-content: flex-end;
}
.image-container {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-small {
  width: 10vh;
}

.elevation-demo {
  height: 10vh;
  margin: 30px 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: darkgreen;
  font-family: "TheBigWords";
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  text-shadow: 1px 1px #13ffcc;
}
</style>

<template>
  <f7-page name="home">
    <div class="image-container">
      <f7-row>
        <f7-col>
          <div
            class="elevation-demo elevation-10 elevation-hover-24 elevation-pressed-12 elevation-transition"
          >
            START SHOPPING
          </div>
        </f7-col>
      </f7-row>
    </div>
  </f7-page>
</template>

<style scoped>
.image-container {
  margin-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.elevation-demo {
  height: 10vh;
  margin: 30px 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: black;
  font-family: "TheBigWords";
  color: #13ffcc;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
  text-shadow: 1px 1px #ffffff;
}
</style>

<template>
  <div class="navbar no-hairline">
    <div class="navbar-inner sliding">
      <div v-if="back" class="left">
        <a class="link back">
          <i class="icon icon-back"></i>
          <span class="ios-only">Back</span>
        </a>
      </div>
      <div v-if="menu" class="left">
        <a href="#" class="link icon-only panel-open" data-panel="left">
          <i class="icon f7-icons ios-only">menu</i>
          <i class="icon material-icons md-only">menu</i>
        </a>
      </div>
      <div class="title">
        <strong class="text-align-center">{{ title }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    back: Boolean,
    menu: Boolean
  }
};
</script>

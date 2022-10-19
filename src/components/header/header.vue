<template>
  <div class="header">
    <el-switch size="small" v-model="theme" @click="changeTheme()"></el-switch>
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
    <router-link class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
import { ElSwitch } from 'element-plus'

export default {
  name: 'm-header',
  components: {
    ElSwitch
  },
  data() {
    return {
      theme: true,
      themeValue: ''
    }
  },
  mounted() {
      document.documentElement.setAttribute('data-theme', 'dark')
    },
  methods: {
   changeTheme() {
      document.documentElement.setAttribute(
        'data-theme',
        this.theme ? 'dark' : 'light'
      )
    }
  }
}

</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  text-align: center;
  // color: $color-theme;
  @include text-color(color-theme);
  font-size: 0;
  line-height: 44px;
  .el-switch {
    position: absolute;
    top: 0;
    left: 0;
    padding: 12px;
    --el-switch-on-color: #ffcd32;
    // --el-switch-on-color:$color-theme;
    --el-switch-off-color: rgb(109, 109, 106);
  }
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image("logo");
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: $font-size-large-x;
      // color: $color-theme;
      @include text-color(color-theme)
    }
  }
}
</style>

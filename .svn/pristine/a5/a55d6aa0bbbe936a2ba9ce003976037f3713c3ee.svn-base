<template>
  <header class="app-header navbar">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'navbar',
  created () {
    this._navbar = true
  }
}
</script>
<style lang="scss" scoped>
@import 'static/css/scss/_mixins-prefixion.scss';
  .app-header{
    height: 4.375rem;
    border-bottom: 0;
    @include shadow(0 3px 18px #333333);
    font-size: 15px;
  }
</style>

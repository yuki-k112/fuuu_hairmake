<template lang="pug">
    div.menuCont
      dt.menuCont__ttl {{ttl}}
      <slot name="addAreaBefore"></slot>
      dd.menuCont__txt {{txt}}
      <slot name="addAreaAfter"></slot>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .menuCont{
    @include flx(bet , cen);
    width: 100%;
    & + .menuCont{
      margin-top: 0.5rem;
      // @include padding--top(xxs);
      // border-top: dotted thin $rgb__sub;
    }
    &__img{
      background: #ddd;
      height: 250px;
      width: 100%;
      @include margin--top(md);
    }
    &__ttl{
      min-width: 5rem;
      font-weight: 400;
      color: $rgb__main;
    }
    &__txt{
      font-weight: normal;
      min-width: 5rem;
    }
    &__list{
      @extend .menuCont__txt;
      margin: 1.5rem 0;
    }
  }
  // 下層はメニュー縮める、コンテンツ横にスライド＋フェード

</style>

<script>
export default {
  name: 'menuCont',
  props:{
    path:{type:String},
    alt:{type:String},
    hl:{type:String},
    ttl:{type:String},
    txt:{type:String},
  }
}
</script>

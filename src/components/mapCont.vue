<template lang="pug">
    div.mapCont
      dt.mapCont__ttl {{ttl}}
      <slot name="addAreaBefore"></slot>
      dd.mapCont__txt {{txt}}
      <slot name="addAreaAfter"></slot>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mapCont{
    @include flx(start , cen);
    width: 100%;
    & + .mapCont{
      margin-top: 0.25rem;
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
      min-width: 6rem;
      font-weight: 400;
      color: $rgb__main;
    }
    &__txt{
      font-weight: normal;
    }
    &__list{
      @extend .mapCont__txt;
      margin: 1.5rem 0;
    }
  }

  @include sp {
    .mapCont{
      flex-direction: column;
      align-items: flex-start;
      & + .mapCont{
        @include margin--top(xxs);
        @include padding--top(xxs);
        border-top: dotted thin ;
      }
    }
  };

</style>

<script>
export default {
  name: 'mapCont',
  props:{
    path:{type:String},
    alt:{type:String},
    hl:{type:String},
    ttl:{type:String},
    txt:{type:String},
  }
}
</script>

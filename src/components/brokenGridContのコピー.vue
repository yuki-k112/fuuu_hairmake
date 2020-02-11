<template lang="pug">
  section.brokenGridCont
    <slot name="img"></slot>
    h3.brokenGridCont__txtArea__hl {{hl}}
    p.brokenGridCont__txtArea__ttl {{ttl}}
    p.brokenGridCont__txtArea__txt {{txt}}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .brokenGridCont{
    width: 80%;
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: 30% 1fr;
    grid-template-rows: 1fr auto auto;
    & + .brokenGridCont{
      margin-top: 11rem
    }
    &__img{
      grid-column: 2/3;
      grid-row: 1/4;
      width: 90%;
      margin-left: auto;
    }
    &__txtArea__hl{
      grid-column: 1/2;
      grid-row: 1/2;
      @include font--size(lg);
      @include flx(start , btm);
      color: $rgb__main;
    }
    &__txtArea__ttl{
      grid-column: 1/2;
      grid-row: 2/3;
      font-weight: bold;
      @include font--size(sm);
      @include margin--top(xxs);
    }
    &__txtArea__txt{
      grid-column: 1/2;
      grid-row: 3/4;
      @include margin--top(sm);
      max-width: 24rem;
    }
  }
  .even.brokenGridCont{
    grid-template-columns: 1fr 40%;
    grid-template-rows: 1fr auto auto;
  }
  .even .brokenGridCont{
    &__img{
      grid-column: 1/2;
      grid-row: 1/4;
      margin:4rem 3rem 0 0;
      transform: translateY(-4rem);
    }
    &__txtArea__hl{
      grid-column: 2/3;
      grid-row: 1/2;
    }
    &__txtArea__ttl{
      grid-column: 2/3;
      grid-row: 2/3;
    }
    &__txtArea__txt{
      grid-column:2/3;
      grid-row: 3/4;
      @include margin--top(sm);
      max-width: 100%;
    }
  }
</style>

<script>
export default {
  name: 'brokenGridCont',
  props:{
    path:{type:String},
    alt:{type:String},
    hl:{type:String},
    ttl:{type:String},
    txt:{type:String},
  }
}




</script>

<template lang="pug">
  section.fv
    div.fv__img--1
    div.fv__img--2
    div.fv__img--3
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fv{
  width: 100%;
  height: 100vh;
  padding: 3rem;
  &__img{
    display: block;
    width: 100%;
    height: 100%;
  }
  &__img--1{
    @extend .fv__img;
    background: #ccc;
  }
  &__img--2{
    @extend .fv__img;
    background: #ddd;
  }
  &__img--3{
    @extend .fv__img;
    background: #eee;
  }

}

</style>

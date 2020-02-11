<template lang="pug">
  footer.footer
    p Copyright Fuuu hairmake All Rights Reserved.
</template>

<script>
export default {
  name:'fuuuFooter',
}
</script>

<style scoped lang="scss">
.footer{
  @include margin--top(md);
  text-align: center;
  color: $rgb__main;
  background: $rgb__sub;
  padding: 0.5rem;
  font-size: 12px;
}
@include sp {
  .footer{
    padding-bottom: 60px;
    width: 100vw;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
};
</style>

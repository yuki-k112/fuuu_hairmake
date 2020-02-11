<template lang="pug">
  section.contSec
    div.contSec__img
    h2.hl--lv2--contSec {{hl}}
    dl.contSec__txtArea
      dt {{ttl}}
      <slot name="listArea"></slot>
      dd {{txt}}
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

<script>
export default {
  name: 'contSec',
  props:{
    class:{type:String},
    hl:{type:String},
    ttl:{type:String},
    txt:{type:String},
  }
}




</script>

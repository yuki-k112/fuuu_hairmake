<template lang="pug">
  div.pageHeader
    h2.hl--lv2 {{hl}}
      span.hl__sub--lv2 {{sub}}
    p.pageHeader__txt {{txt}}
      br
      |{{txt02}}
</template>

<script>
export default {
  name:'pageHeader',
  props:{
    hl:{type:String},
    sub:{type:String},
    txt:{type:String},
    txt02:{type:String},
  }
}
</script>

<style scoped lang="scss">
  .pageHeader{
    width: 90%;
    margin: auto;
    &__txt{
      @include margin--top(sm);
      max-width: 42rem;
      margin-left: 10%;
    }
    &::after{
      content: "";
      width: 100%;
      height: 50vh;
      display: block;
      @include margin--top(md);
    }
  }
  .concept .pageHeader::after{
    background: url('../assets/concept/img_concept_header.jpg') center;
    background-size: cover;
  }
  .access .pageHeader::after{
    background: url('../assets/access/img_access_header.jpg') center;
    background-size: cover;
  }
  .menu .pageHeader::after{
    background: url('../assets/menu/img_menu_header.jpg') center;
    background-size: cover;
  }
  .hl--lv2{
    @include margin--top(sm);
    color: $rgb__main;
    margin-left: 10%;
  }
  // .concept .pageHeader::before{
  //   background: url('@/assets/concept/img_header_concept.jpg') center;
  //   background-size: cover;
  // }
  // .menu .pageHeader::before{
  //   background: url('@/assets/menu/img_header_menu.jpg') center;
  //   background-size: cover;
  // }
  // .access .pageHeader::before{
  //   background: url('@/assets/access/img_header_access.jpg') center;
  //   background-size: cover;
  // }

  @include sp {
    .pageHeader{
      padding-top: 25px;
      width: 100%;
      &__txt{
        margin-left: 0;
        margin-top: 2.75rem;
      }
      &::after{
        height: 35vh;
        min-height: 200px;
      }
    }
    .hl--lv2{
      margin-top: 0;
      margin-left: 100px;
    }
    .hl__sub--lv2{
      margin-left: 0;
    }

  };


</style>

<template lang="pug">
  section.txtContents
    //<slot name="img"></slot>
    .txtContents__txtArea
      h3.txtContents__txtArea__hl {{hl}}
      p.txtContents__txtArea__ttl {{ttl}}
      p.txtContents__txtArea__txt {{txt}}
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .txtContents{
    width: 85%;
    margin: auto;
    // display: grid;
    // grid-template-columns: 30% 1fr;
    // grid-template-rows: 1fr auto auto;
    @include flx(cen , cen);
    height: 65vh;

    &::after{
      content: "";
      background: url('../assets/concept/img_concept_01.jpg') no-repeat center;
      background-size: cover;
      width: 50%;
      height: 100%;
      display: block;
      margin-left: 5rem;
    }





    // &__img{
    //   grid-column: 2/3;
    //   grid-row: 1/4;
    //   width: 90%;
    //   margin-left: auto;
    // }
    &__txtArea__hl{
      grid-column: 1/2;
      grid-row: 1/2;
      @include font--size(lg);
      // @include flx(start , btm);
      color: $rgb__main;
      font-family:$font__web--en;
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
  // .even.brokenGridCont{
  //   grid-template-columns: 1fr 40%;
  //   grid-template-rows: 1fr auto auto;
  // }
  // .even .brokenGridCont{
  //   &__img{
  //     grid-column: 1/2;
  //     grid-row: 1/4;
  //     margin:4rem 3rem 0 0;
  //     transform: translateY(-4rem);
  //   }
  //   &__txtArea__hl{
  //     grid-column: 2/3;
  //     grid-row: 1/2;
  //   }
  //   &__txtArea__ttl{
  //     grid-column: 2/3;
  //     grid-row: 2/3;
  //   }
  //   &__txtArea__txt{
  //     grid-column:2/3;
  //     grid-row: 3/4;
  //     @include margin--top(sm);
  //     max-width: 100%;
  //   }
  // }

  .txtContents.second{
    &::after{
      order: -1;
      margin-left: 0;
      margin-right: 5rem;
      background: url('../assets/concept/img_concept_02.jpg') no-repeat center;
      background-size: cover;
      width: 55%;
    }
    .txtContents__txtArea{
      width: 45%;
    }
  }
  .txtContents.third{
    &::after{
      background: url('../assets/concept/img_concept_03.jpg') no-repeat center;
      background-size: cover;
    }
  }

  @include sp {
    .txtContents{
      flex-direction: column;
      width: 100%;
      height: auto;
      &::after{
        width: 100%;
        height: 200px;
        @include margin--top(sm);
        margin-left: 0;
      }
    }
  .txtContents.second{
    &::after{
      order: 0;
      margin-right: 0;
      width: 100%;
    }
    .txtContents__txtArea{
      width: 100%;
    }
  }
};
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

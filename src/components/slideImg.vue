<template>
  <div class="slideImg--wrap">
      <transition name="slide">
        <div class="slideImg" v-bind:class="slideImg[slide]" :key="slideImg[slide]"></div>
      </transition>
  </div>
</template>

<script>
export default{
  name:'slideImg',
  data: function(){
    return{
      slide:0,
      slideImg:['img01' , 'img02' , 'img03'],
      timer:null
    }
  },
  mounted: function(){
    console.log('mounted');
    this.ontimer();
  },
  methods:{
    nextSlide: function(){
      this.slide = this.slide < this.slideImg.length - 1 ? this.slide += 1 : 0;
    },
    ontimer: function(){
      this.timer = setInterval(() => {
        this.nextSlide();
      }, 6000)
    },
  }
}
</script>


<style scoped lang="scss">
  .slideImg{
    &--wrap{
      transform: translateX(100%);
      transition: 1s;
      position: fixed;
      width: calc(50vw  - 110px);
      height: 100vh;
      top: 0;
      right: 0;
      min-width: 300px;
      opacity: 0;
    }
    position: fixed;
    top: 0;
    right: 0;
    transition: 6s;
    width: 100%;
    height: 100%;
    // &::before{
    //   content: "";
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   top: 0;
    //   left:0;
    //   z-index: 10;
    //   background: rgba(0,0,0,0.31);
    // }
    &.img01{
      background: url('../assets/img_slide01.jpg') no-repeat center;
      background-size: cover;
    }
    &.img02{
      background: url('../assets/img_slide02.jpg') no-repeat center;
      background-size: cover;
    }
    &.img03{
      background: url('../assets/img_slide03.jpg') no-repeat 25%;
      background-size: cover;
    }
  }
  .index .slideImg--wrap{
    //width: 35vw;
    transform: translateX(0);
    opacity: 1;
  }

  .slide-enter-active,.slide-leave-active{
    transition:opacity 1s;
  }
  .slide-enter , .slide-leave-to{
    opacity: 0;
  }

  @include sp {
    .slideImg--wrap{
      width: 95vw;
      height: 0;
      min-width:1px;
      margin:2.5% auto 0;
      position: relative;
      z-index: -1;
      transform: translateY(-100vh);
      width: 95vw;
    }
    .index .slideImg--wrap{
      transform: translateY(0);
      height: 60vh;
    }
  };

</style>

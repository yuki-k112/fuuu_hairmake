<template>
  <div id="app">
    <fuuuHeader></fuuuHeader/>
    <slideImg></slideImg/>
    <div class="contents">
      <transition name="router">
        <router-view/>
      </transition>
      <contact></contact>
      <fuuuFooter></fuuuFooter>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// .contents{
//   padding:4.3rem 0 18vw 130px;
// }
// .index .contents{
//   padding-right:48vw;
// }
.contents{
  width: calc(100vw - 110px);
  padding:4.3rem 0 0;
  margin-left: 110px;
}
.index .contents{
  width: 50vw;
  padding-top: 0;
}

.hl{
  font-family: $font__web--en;
  letter-spacing: 2.5px;
  line-height: initial;
  &__sub--lv2{
    font-size: 1rem;
    margin: 0.5rem 0 0 0.5rem;
    font-weight: normal;
    display: block;
  }
  &--lv2{
    @extend .hl;
    @include font--size(lg);
  }
  &--lv3{
    @extend .hl;
    @include font--size(md);
  }
}
.txtLink{
  width: 10rem;
  padding: 0.5rem 0.25rem 0.5rem;
  font-weight: bold;
  color: $rgb__main;
  @include flx(start , cen);
  transition: .3s;
  &::after{
    content: "";
    width: 2rem;
    height: 2px;
    background: $rgb__main;
    display: block;
    margin-left: 0.5rem;
    transition: .3s;
    transition-timing-function: cubic-bezier(.37,.96,.63,1.2);
 }
 &:hover{
   color: $rgb__accent;
 }
 &:hover::after{
   width: 4.5rem;
   background: $rgb__accent;
 }
}

.router-enter{
  opacity: 0;
  transform: translateY(1rem);
  transition: 1s;
}
.router-enter-active{
  transition:1s;
}
.router-leave,.router-leave-to{
  opacity: 0;
}
.pc_none{
  display: none;
}

#inview,
#inviewContact,
{
  opacity: 0;
  transform: translateY(1rem);
  transition: .3s;
  transition-timing-function: cubic-bezier(.02,.27,.46,1.03);
}
#inview.active{
  opacity: 1;
  transform: translateY(0);
}
#inview02,
#inviewContact02{
  opacity: 0;
  transform: translateY(1rem);
  transition: .3s;
  transition-timing-function: cubic-bezier(.02,.27,.46,1.03);
  transition-delay: .1s;
}
#inview02.active,
#inviewContact02.active{
  opacity: 1;
  transform: translateY(0);
}


@include sp {
.pc_none{
  display: block;
}
.sp_none{
  display: none;
}
.contents{
  width: 90vw;
  padding:0 0;
  margin:auto ;
}
.index .contents{
  width: 90vw;
}
.txtLink:hover{
  color: initial;
}
.txtLink:hover::after{
  width: 2rem;
}
};


</style>

<script>
import fuuuHeader from '@/components/fuuuHeader.vue'
import contact from '@/components/contact.vue'
import fuuuFooter from '@/components/fuuuFooter.vue'
import slideImg from "@/components/slideImg.vue"


export default{
  components:{
    fuuuHeader,
    contact,
    slideImg,
    fuuuFooter
  },
  data: function(){
    return {pageClass:'top'}
  },



}
</script>

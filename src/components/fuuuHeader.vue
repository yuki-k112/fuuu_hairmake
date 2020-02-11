<template lang="pug">
  header.menu
    nav.menu__nav
      h1.logo
        a(href='/fuuu.hairmake/')
          img.logo__img(src='@/assets/logo.svg' alt='Fuuu hairmake')
      ul.menu__nav__link--wrap
        li.menu__nav__link(v-for="item in nav")
          <router-link v-bind:to="item.path">{{ item.page }}</router-link>
        li.menu__nav__link
          <router-link v-scroll-to="'#contact'" to>予約する</router-link>
</template>

<script>
import logo from '@/components/logo.vue'

export default {
  name:'fuuuHeader',
  components:{
    logo
  },
  computed: {
    nav(){return this.$store.getters.nav}
  },
}
</script>

<style scoped lang="scss">
.menu{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 110px;
  background: $rgb__main;
  padding-top: 0rem;

  &__nav{
    text-align: left;
    font-size: 15px;
    // position: absolute;
    // bottom: 2rem;
    // left:2rem;
    //background: #fff;
    //    box-shadow: $shadow__02;
    //    border-right: solid thin $rgb__main;
  }
  &__nav__link{
    width: 100px;
    text-align: center;
    line-height: 3rem;
    // background: #fff;
    transition: .3s;
    margin: auto;
  }
  &__nav__link:hover{
    background: #a08749;
  }
  &__nav__link a{
    // color: $rgb__main;

    color: #fff;

    display: block;
    padding:0.25rem;
  }
  &__nav__link:hover a{
    color: #fff;
  }
  &__nav__link  + .menu__nav__link{
    margin-top: 1rem;
  }
}
.logo{
  // width: 100%;
  text-align:center;

    width: 160px;
    height: 160px;
    text-align: center;
    padding: 1.75rem 1.75rem 1.75rem 1rem;
    margin-bottom: 4rem;
    background: $rgb__main;
    border-radius: 50%;
    @include flx(cen,cen);

  &__img{
    max-width: 300px;
    width: 100%;
  }
}

@include sp {
  .menu{
    height: 0;
    bottom: 0;
    top: auto;
    width: 0;
    background: none;
    position: relative;
    &__nav .logo{
      position: absolute;
      top: 0.25rem;
      left: 0.25rem;
      width: 90px;
      height: 90px;
      border: solid thin #fff;
      padding: 0.75rem;
    }
    &__nav__link--wrap{
      position: fixed;
      width: 100vw;
      height: 45px;
      left: 0;
      bottom: 0.25rem;
      @include flx(around , cen);
      z-index: 10;
    }
    &__nav__link{
      border-right:solid thin #fff;
      width: 24.5%;
      height: 100%;
      background: $rgb__main;
      border-radius: 5px;
    }
    &__nav__link a{
      padding: 0;
    }
    &__nav__link:hover{
      background: $rgb__main;
    }
    &__nav__link--wrap .menu__nav__link:nth-of-type(1){
      display: none;
    }
    &__nav__link + .menu__nav__link{
      margin-top: 0;

    }
  }
};
</style>

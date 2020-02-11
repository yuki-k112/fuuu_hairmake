<template lang="pug">
main

  p.copy: strong.copy__inner 山の中の美容室で、<br>ちょっとだけ<br>一休みしませんか？

  <splitCont v-bind="splitContAbout">
    <router-link to="/fuuu.hairmake/concept" slot="addAreaAfter" class="txtLink">MORE</router-link>
    img.splitCont__img(src="@/assets/index/img_index_01.jpg" alt="店舗外観" slot="img")
  </splitCont/>

  <splitCont v-bind="splitContStaff">
    dt(slot="addAreaBefore").splitCont__txtArea__list
      .inner
        h3.inner__hl Name
        p 松井 祐太
      .inner
        h3.inner__hl Birthday
        p 1987.12.25
      .inner
        h3.inner__hl Speciality
        p 和太鼓演奏・サッカー
      .inner
        h3.inner__hl Motto
        p 生ある限り望みあり
    img.splitCont__img(src="@/assets/index/img_index_02.jpg" alt="スタッフ：松井裕太" slot="img")
  </splitCont/>
</template>

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
.copy{
  display:flex;
  justify-content:center;
  &__inner{
    font-size:36px;
    display:block;
    line-height:2.5;
    margin:20% auto;
    writing-mode: vertical-rl;
    font-weight: normal;
  }
}

@include sp {
  .copy__inner{
    font-size: 18px;
    margin: 4rem auto;
    line-height: 3.5;
  }
};
</style>

<script>
import splitCont from '@/components/splitCont.vue'

export default{
  components:{
    splitCont,
  },


  data:function(){
    return{
      pageClass:{
        'isTop':true
      },
      splitContAbout:{
        top:true,
        class:'about',
        hl:'About',
        ttl:'この美容室について',
        txt:'美容室「Fuuu hairmake」は太宰府天満宮近くの静かな山間に位置します。「ただヘアスタイルを整えるだけでなく、お客様がほっと一息つけるような場所」であること。それを目標として日々営業中です。皆様のお越しを心よりお待ちしています。'
      },
      splitContStaff:{
        hl:'Staff',
        ttl:'私たちについて',
        txt:'私はこの店に流れている穏やかな空気感が大好きです。ジッとしていると、まるで時が止まったような、それでいて心地いい風が時折話かけてくるような…。この「居心地のよさ」を、あなたと一緒に楽しみたい。そんなことを思いながら、お客さまと接しています。'
      }
    }
  },

  computed:{
    top(){return this.$store.getters.getTop},
  },

  head: {
    meta: [
      { name: 'description', content: '太宰府市の美容室Fuuu hairmakeです。山際の閑静な美容室で、ほっと一息ついてみませんか' },
      { name: 'keyword', content:'Fuuu hairmake , 美容室 , 太宰府 '}
    ]
  },

}


</script>

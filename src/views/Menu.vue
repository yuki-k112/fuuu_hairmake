<template lang="pug">
main
  <pageHeader v-bind='pageHeader'></pageHeader>
  section.menuSec
   div.menuSec__inner(v-for="cate in menuCont")
    h3.hl--lv3 {{cate.hl}}
    dl.menuCont--wrap
      <menuCont v-bind:hl="item.hl" v-bind:ttl="item.ttl" v-bind:txt="item.txt" v-for="item in cate.items"></menuCont>
</template>

<style scoped lang="scss">
  .menuSec{
    width: 70%;
    margin: auto;
    @include margin--top(md);
    &__inner + .menuSec__inner{
      margin-top: 1.75rem;
      padding-top: 1.75rem;
      border-top: dotted thin;
    }
  }
  .menuCont--wrap{
    margin-top: 1.0rem;
    margin-left: 1.25rem;
    width: 400px;
  }
  .hl--lv3{
    color: $rgb__main;
    width: 70%;
    @include flx(start , cen);
  }

  @include sp {
    .menuSec{
      width: 100%;
    }
    .menuCont--wrap{
      width:100%;
    }
  };
</style>

<script>
import menuCont from "@/components/menuCont.vue"
import pageHeader from "@/components/pageHeader.vue"

export default{
  components:{
    menuCont,
    pageHeader
  },
  data:function(){
    return {
      title:'メニュー',
      pageHeader:{
        hl:'Menu',
        sub:'メニュー',
        txt:'男性から女性、お子様まで、',
        txt02:'幅広いメニューを取り揃えております。'
      },

      menuCont:[
        {
          hl: 'Cut',
          items:[
            {ttl:'Mens',txt:'¥3,000',},
            {ttl:'Womens',txt:'¥4,500',},
            {ttl:'高校生',txt:'¥2,500',},
            {ttl:'中学生以下',txt:'¥2,000',},
          ]
        },
        {
          hl: 'Color + Cut',
          items:[
            {ttl:'全体',txt:'¥8,000〜',},
            {ttl:'リタッチ',txt:'¥7,000',},
            {ttl:'ヘナ',txt:'¥7,500',},
          ]
        },
        {
          hl: 'Cut + Perm',
          items:[
            {ttl:'コールドパーマ',txt:'¥7,000〜',},
          ]
        },
        {
          hl: 'HAIR SET',
          items:[
            {ttl:'パーティーヘアー',txt:'¥3,000〜',},
            {ttl:'ヘアスタイリング',txt:'¥1,500',},
          ]
        },
        {
          hl: '縮毛矯正(カット込み)',
          items:[
            {ttl:'縮毛矯正',txt:'¥10,000〜',},
            {ttl:'毛髪改善',txt:'¥5,000',},
          ]
        },
        // {
        //   hl: 'TREATMENT',
        //   items:[
        //     {ttl:'イオントリートメント',txt:'+ ¥1,500〜',},
        //     {ttl:'イオントリートメントのみ',txt:'¥2,500',},
        //   ]
        // },
        // {
        //   hl: 'SHAMPOO',
        //   items:[
        //     {ttl:'シャンプー＆ブロー',txt:'+ ¥1,000〜',},
        //     {ttl:'シャンプー＆ブローのみ',txt:'+ ¥2,500',},
        //   ]
        // },


      ]
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: '太宰府の美容室、fuuu hairmakeのメニューをご紹介します。' },
      { name: 'keyword', content:'fuuu hairmake , 美容室 , 太宰府 , メニュー'}
    ]
  },

}

</script>

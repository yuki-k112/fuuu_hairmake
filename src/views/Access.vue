<template lang="pug">
  main
    <pageHeader v-bind='pageHeader'></pageHeader>
    section.mapSec
      h3.hl--lv3 {{mapCont.hl}}
      dl.mapCont--wrap
        <mapCont v-bind:hl="item.hl" v-bind:ttl="item.ttl" v-bind:txt="item.txt" v-for="item in mapCont.items"></mapCont>
      h4.hl--lv4 公共交通機関をご利用の方へ
      p ご来店の際、西鉄太宰府駅への到着予定時刻をお知らせください。自家用車にて送迎いたします。
    section.map
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.0105558597475!2d130.52747011520142!3d33.527111180752065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35419ba09bb3998f%3A0xf5591295a24c0c9b!2sFuuu+hairmake!5e0!3m2!1sja!2sjp!4v1502635414388&ll=33.5271112,130.5274701&z=5z" width="100%" height="auto" frameborder="0" style="border:0" allowfullscreen class="map__inner"></iframe>
</template>

<style scoped lang="scss">
  .mapSec{
    width: 70%;
    margin: auto;
    @include margin--top(md);
  }
  .map{
    width: 70%;
    margin: auto;
    @include margin--top(md);
    &__inner{
      height: 45vh;
      min-height: 280px;
    }
  }
  .mapCont--wrap{
    @include margin--top(xxs);
  }
  .hl--lv4{
    @include margin--top(sm);
    font-size: 1rem;
  }

  @include sp {
    .mapSec{
      width: 100%;
    }
    .map{
      width: 100%;
    }
  };
</style>

<script>
import mapCont from "@/components/mapCont.vue"
import pageHeader from "@/components/pageHeader.vue"

export default{
  components:{
    pageHeader,
    mapCont,
  },
  data:function(){
    return{
      title:'アクセス',
      pageHeader:{
        class:'access',
        hl:'Access',
        sub:'アクセス',
        txt:'Fuuu hairmake へのアクセスはこちらです。',
        txt02:'車をお持ちでない方の為に、送迎の用意もございます。'
      },
      mapCont:
        {
          hl:'Fuuu hairmake',
          items:[
            {ttl:'住所' , txt:'福岡県太宰府市三条１丁目２５－８'},
            {ttl:'営業時間' , txt:'9：00～20：00(時間外をご希望の方はご相談ください)'},
            {ttl:'定休日' , txt:'毎週月曜日(月曜日をご希望の方はご相談ください)'},
          ],
        },
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: '太宰府の美容室、fuuu hairmakeへのアクセスです' },
      { name: 'keyword', content:'fuuu hairmake , 美容室 , 太宰府 , アクセス'}
    ]
  },

}



</script>

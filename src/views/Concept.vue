<template lang="pug">
main
  <pageHeader v-bind='pageHeader'></pageHeader>
  <brokenGridCont v-bind="concept01" class="first" >
    img(src="@/assets/concept/img_concept_01.jpg" alt="Fuuu hairmakeの様子" slot="img" class="brokenGridCont__img")
  </brokenGridCont/>
  <brokenGridCont v-bind="concept02" class="second" >
    img(src="@/assets/concept/img_concept_02.jpg" alt="店内の様子" slot="img" class="brokenGridCont__img")
  </brokenGridCont/>
  <brokenGridCont v-bind="concept03" class="third" >
    img(src="@/assets/concept/img_concept_03.jpg" alt="ゆったりとした雰囲気" slot="img" class="brokenGridCont__img")
  </brokenGridCont/>
</template>


<style scoped lang="scss">
  .txtContents{
    margin-top: 9rem;
    margin-bottom: 9rem;
  }

  @include sp {
    .txtContents{
      margin-top: 4.5rem;
      margin-bottom: 4.5rem;
    }
    .txtContents.first{
      margin-top: 5rem;
    }
  };
</style>

<script>
import brokenGridCont from '@/components/brokenGridCont.vue'
import pageHeader from '@/components/pageHeader.vue'

export default {
  components: {
    brokenGridCont,
    pageHeader
  },
  data: function () {
    return {
      title: 'コンセプト',
      pageHeader:{
        hl:'Concept',
        sub:'私たちの想い',
        txt:'木漏れ日の漏れる竹林の中、時間がゆっくりと流れる場所。',
        txt02:'Fuuu hairmake に込めた、私たちの想いをご紹介します。',
      },
      concept01:{
        path:'@/assets/concept/img_01.jpg',
        alt:"美容室の様子",
        hl:'01',
        ttl:'私たちの美容室について',
        txt:'太宰府天満宮から水瓶山に延びる坂道を登った場所に、私は店を構えています。振り返ると眼下に太宰府の街並みが広がり、周囲からはそよ風に揺れる木々のざわめきが聞こえてくる。そんな、街から少し離れた静かなところです。'
      },
      concept02:{
        hl:'02',
        ttl:'日常から少しだけ離れた場所',
        txt:'店内はゆっくりとした時間が流れ、日々の忙しさを忘れてほっと一息つけるような、穏やかな場所になっています。街の喧騒もここまでは届きません。窓から差し込む柔らかな陽光や、周りの木立のそよぐ音があなたをお出迎えします。'
      },
      concept03:{
        hl:'03',
        ttl:'Fuuu hairmake に込めた想い',
        txt:'そんな空間で、リラックスした時間を過ごしてほしい。それが私たちの想いです。ただの美容室ではなく、ちょっと疲れた時に足が向くようなお店でありたい。まるであなたの別荘だと感じてもらえるようなお店でありたい。私はそう願っています。ご来店を心よりお待ちしています。'
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
      { name: 'description', content: '太宰府の美容室、fuuu hairmakeのコンセプトをご紹介します。日々の喧騒を忘れ、ゆったりとした時を過ごして欲しい。それが私たちの願いです' },
      { name: 'keyword', content:'fuuu hairmake , 美容室 , 太宰府 , コンセプト'}
    ]
  },

  created:function(){


      startObserve()
      console.log('done')
    },

  methods:{
startObserve:function () {
  // 見えている量が閾値を上回るか下回ったときに呼ばれる
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entries[0].intersectionRatio > 0.2) {
        // 100%見えなくなったとき
        entries[0].target.classList.add('active')
        // document.getElementById("inview02").classList.add("active");
      } else if (! entries[0].isIntersecting) {
        // 見えている領域が20%を下回ったとき
        entries[0].target.classList.remove('active')
        // document.getElementById("inview02").classList.remove("active");
      }

    });
  }

  const option = {
    // 20%と100％の閾値
    threshold: [0.2 , 1.0]
  }

  const observer = new IntersectionObserver(
    callback, option
  )

  const target = document.querySelector('#inview');
  const target02 = document.querySelector('#inview02');
  const target03 = document.querySelector('#inview03');
  const target04 = document.querySelector('#inview04');
  const targetContact = document.querySelector('#inviewContact');
  const targetContact02 = document.querySelector('#inviewContact02');
  observer.observe(target);
  observer.observe(target02);
  observer.observe(target03);
  observer.observe(target04);
  observer.observe(inviewContact);
  observer.observe(inviewContact02);
}

  },


}


</script>

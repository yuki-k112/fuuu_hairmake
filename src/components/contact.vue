<template lang="pug">
  aside.contact#contact
    .contact__inner
      h2.hl--lv2 Contact
      dl.leadArea
        dt.leadArea__hl ご予約・お問い合わせについて
        dd.leadArea__txt ご予約・お問い合わせは、<br class="sp_none">LINEもしくはお電話にて承っております。
      address.address
        a.address__line(href="http://line.me/ti/p/%40oax6199x" target="_blank") LINEで予約する
        p.address__tel.sp_none
          span.address__tel__num 090-8833-8396
          span.address__txt 電話で予約する
        a.address__tel.pc_none(href="tel:09088338396") 電話で予約する
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact{
  @include margin--top(lg);
  &::before{
    content: "";
    background: url('../assets/contact/img_contact_01.jpg') center;
    background-size: cover;
    width: 90%;
    margin: auto;
    height: 35vh;
    min-height: 300px;
    display: block;
  }
  &__inner{
    width: 70%;
    margin: auto;
    text-align: center;
    @include flx();
    flex-direction: column;
    align-items: center;
  }
}
.hl--lv2{
  @include margin--top(sm);
  margin-left: -1.25rem;
  color: $rgb__main;
}
.leadArea{
  @include margin--top(xs);
  &__hl{
    @include font--size(sm);
  }
  &__txt{
    margin-top: 0.5rem;
  }
}
.address{
  @include margin--top(sm);
  @include flx(start , cen);
  &__line{
  margin-right: 2rem;
  padding-right: 2rem;
  border-right: dotted thin;
  color: $rgb__main;
  font-weight: bold;

  }
  &__line::before{
    content: "";
    background: url('../assets/contact/line.png');
    width: 3.5rem;
    height: 3.5rem;
    background-size: contain;
    display: block;
    margin:0 auto 0.25rem;
  }
  &__tel{
    font-weight: bold;
    text-align: center;
    color: $rgb__main;
  }
  &__tel__num{
    line-height: 3.5rem;
    display: block;
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
  }
}

@include sp {
  .contact{
    &::before{
      width: 95vw;
      left: 50%;
      transform: translateX(-50%);
      min-height: 120px;
      height: 25vh;
      position: relative;
    }
    &__inner{
      width: 92%;
    }
  }
  .address{
    justify-content: center;
    &__line{
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: solid thin $rgb__main;
    }
    &__tel.pc_none::before{
      content: "";
      background: url('../assets/contact/tel.svg');
      width: 3.5rem;
      height: 3.5rem;
      background-size: contain;
      display: block;
      margin:0 auto;
    }
  }
  .hl--lv2{
    margin-left: 0;
  }
};


</style>

<script>
export default {
  name: 'contact',
}




</script>

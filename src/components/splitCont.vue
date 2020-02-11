<template lang="pug">
  section.splitCont
    h2.hl--lv2 {{hl}}
    dl.splitCont__txtArea
      dt.splitCont__txtArea__ttl {{ttl}}
      <slot name="addAreaBefore"></slot>
      dd.splitCont__txtArea__txt {{txt}}
    <slot name="addAreaAfter"></slot>
    <slot name="img"></slot>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .splitCont{
    width: 74%;
    padding: 0 2%;
    margin: auto;
    & + .splitCont{
      @include margin--top(md);
      @include padding--top(md);
      border-top: dotted thin $rgb__sub;
    }
    &__img{
      background: #ddd;
      width: 100%;
      @include margin--top(md);
    }
    &__txtArea{
      @include margin--top(sm);
      max-width: 42rem;
    }
    &__txtArea__ttl{
      @include font--size(sm);
    }
    &__txtArea__txt{
      @include margin--top(xxs);
      font-weight: normal;
    }
    &__txtArea__list{
      @extend .splitCont__txtArea__txt;
      margin: 1.5rem 0;
    }
  }
  .hl--lv2{
    margin-left: -1.25rem;
    color: $rgb__main;
  }
  .txtLink{
    @include margin--top(xs);
  }
  .inner{
    @include flx(start , str);
    border-bottom: dotted thin $rgb__main;
    @include margin--bottom(xxs);
    width: 370px;
    &__hl{
      font-weight: normal;
      font-family:$font__web--en;
      color: $rgb__main;
      margin-right: 1rem;
      min-width: 8rem;
    }
  }

  @include sp {
    .splitCont{
      width:92%;
      padding: 0;
      .inner{
        width: auto;
        padding-bottom: 0.75rem;
      }
      .inner__hl{
        font-size: 1rem;
      }
    }
  };

</style>

<script>
export default {
  name: 'splitCont',
  props:{
    path:{type:String},
    alt:{type:String},
    hl:{type:String},
    ttl:{type:String},
    txt:{type:String},
  }
}
</script>

<template>
  <svg version="1.1" id="logo_outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="586px" y="495px" viewBox="0 0 586 495" style="enable-background:new 0 0 586 495;" xml:space="preserve">
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="@/assets/logo.svg" width="574px" height="448px" mask="url(#clipmask)"></image>
  <mask id="clipmask" maskUnits="objectBoundingBox">
    <path class="st0" d="M12.5,94L176,40.5c0,0,56-27,107-28"/>
    <path class="st1" d="M82.5,33c0,0-9,94-10,108s-12,152-3,159"/>
    <path class="st1" d="M48.5,184c0,0,119-61,163-54"/>
    <path class="st1" d="M242.5,122c0,0,2,135,24,144s18,14,27,4s41-129,33-134"/>
    <path class="st1" d="M365.5,122c0,0,8,142,26,147s18,6,22,0s44-120,35-133"/>
    <path class="st1" d="M487.5,122c0,0,8,153,30,151s18-7,18-7s43-110,35-130"/>
    <path class="st2" d="M52,331.5c0,0-8,114-8,114s7.48-50.6,30.24-61.3C97,373.5,95,384.5,95,384.5s7,12,5,21s-1,35-2,38"/>
    <path class="st2" d="M117.16,383.73c0,0,1.84-14.23,23.84-10.23s9,64,9,64s-9-31-19-30s-21,20-14,27s27-5,27-5"/>
    <path class="st2" d="M180,322.5c0,0-10,22-6,27"/>
    <path class="st2" d="M178,373.5v25c0,0-2,42,0,43"/>
    <path class="st2" d="M202,370.5c0,0,6,40,3,48s-1,23-1,23s8-44,25-53c0,0,10-15,20-16s8,7,8,7"/>
    <path class="st3" d="M269,378.5c0,0,1,24,0,27s-2,38-2,38s12-63,24-73c0,0,4-1,5,6s8,60,7,67s11-67,34-73c0,0,12,42,6,64"/>
    <path class="st3" d="M361.44,383.61c0,0,9.06-15.61,27.06-8.61s6,64,6,64s-1-36-19-33s-14,30-14,30s24,0,27-7"/>
    <path class="st3" d="M431.5,337c0,0-19,103-12,110"/>
    <path class="st3" d="M489.5,377c0,0-63,15-65,19s18,37,53,38c0,0,28-4,28-8"/>
    <path class="st3" d="M544.44,390.88"/>
    <path class="st4" d="M518,400.5c0,0,36.21-8,41.6-23.5c0,0-16.1-3-25.1,3s-24,18-23,22c0,0-2,13,2,17c0,0,5,10,8,13s11,3,11,3s14-2,19-6s28.87-21.86,28.94-24.43"/>
  </mask>
</svg>
</template>

<script>
export default{
  name:'logo',
  mounted:function(){
    console.log('vivusBefore');
    new Vivus('svg-animation', {type: 'scenario-sync',duration: 8, forceRender: false ,animTimingFunction:Vivus.EASE});
    console.log('vivusAfter');
  }
}
</script>


<style scoped lang='scss'>
#logo_outline{
  .st0{fill:none;stroke:#FFFFFF;stroke-width:25;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray: 1500;stroke-dashoffset:1500;}
  .st1{fill:none;stroke:#FFFFFF;stroke-width:27;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray: 1500;stroke-dashoffset:1500;}
  .st2{fill:none;stroke:#FFFFFF;stroke-width:12;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray: 1500;stroke-dashoffset:1500;}
  .st3{fill:none;stroke:#FFFFFF;stroke-width:13;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray: 1500;stroke-dashoffset:1500;}
  .st4{fill:none;stroke:#FFFFFF;stroke-width:11;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray: 1500;stroke-dashoffset:1500;}
}
</style>

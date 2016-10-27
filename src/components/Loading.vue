<template>
    <div class="scene">
        <img data-position="13" class="pillar" src="/static/1.svg">
        <img data-position="14" class="pillar" src="/static/1.svg">
        <img data-position="15" class="pillar" src="/static/1.svg">
        <img data-position="16" class="pillar" src="/static/1.svg">
        <img data-position="1"  class="pillar" src="/static/1.svg">

        <img data-position="2"  class="pillar" src="/static/1.svg">
        <img data-position="3"  class="pillar" src="/static/1.svg">
        <img data-position="4"  class="pillar" src="/static/1.svg">
        <img data-position="5"  class="pillar" src="/static/1.svg">

        <img data-position="6"  class="pillar" src="/static/1.svg">
        <img data-position="7"  class="pillar" src="/static/1.svg">
        <img data-position="8"  class="pillar" src="/static/1.svg">
        <img data-position="9"  class="pillar" src="/static/1.svg">

        <img data-position="10" class="pillar" src="/static/1.svg">
        <img data-position="11" class="pillar" src="/static/1.svg">
        <img data-position="12" class="pillar" src="/static/1.svg">
    </div>
</template>

<script>
import { animate, destroy } from 'services/animation.service';

let animation = { scene: null, segments: null };

export default {
    name: 'loading',
    mounted() {
        let scene = document.querySelector('.scene');
        let segments = [...scene.children].sort((a, b) => parseInt(a.dataset.position, 10) - parseInt(b.dataset.position, 10));

        animate({ scene, segments });
    },
    beforeDestroy() {
        destroy();
    }
}
</script>

<style>
    .scene {
        position: relative;
        width: 284px;
        height: 258px;
    }
    .scene:after {
      content: '';
      display: table;
      clear: both;
    }
    .pillar {
        display: inline-block;
        float: left;
        height: 135px;
        margin-bottom: 15px;
        position: absolute;
    }
    @media screen and (max-width: 640px) and (orientation: landscape) {
        .pillar {
            height: 120px;
        }
        .scene {
            width: 280px;
            height: 235px;
        }
    }
    .pillar:nth-child(1) {
        top: 60px;
        z-index: 4;
    }
    .pillar:nth-child(2) {
        top: 45px;
        left: 30px;
        z-index: 3;
    }
    .pillar:nth-child(3) {
        top: 30px;
        left: 60px;
        z-index: 2;
    }
    .pillar:nth-child(4) {
        top: 15px;
        left: 90px;
        z-index: 1;
    }
    .pillar:nth-child(5) {
        top: 0;
        left: 120px;
        z-index: 0;
    }
    .pillar:nth-child(6) {
        top: 15px;
        left: 150px;
        z-index: 1;
    }
    .pillar:nth-child(7) {
        top: 30px;
        left: 180px;
        z-index: 2;
    }
    .pillar:nth-child(8) {
        top: 45px;
        left: 210px;
        z-index: 3;
    }
    .pillar:nth-child(9) {
        top: 60px;
        left: 240px;
        z-index: 4;
    }
    .pillar:nth-child(10) {
        top: 75px;
        left: 210px;
        z-index: 5;
    }
    .pillar:nth-child(11) {
        top: 90px;
        left: 180px;
        z-index: 6;
    }
    .pillar:nth-child(12) {
        top: 105px;
        left: 150px;
        z-index: 7;
    }
    .pillar:nth-child(13) {
        top: 120px;
        left: 120px;
        z-index: 8;
    }
    .pillar:nth-child(14) {
        top: 105px;
        left: 90px;
        z-index: 7;
    }
    .pillar:nth-child(15) {
        top: 90px;
        left: 60px;
        z-index: 6;
    }
    .pillar:nth-child(16) {
        top: 75px;
        left: 30px;
        z-index: 5;
    }
</style>

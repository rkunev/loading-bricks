<template>
    <div id="app" class="scene">
        <img src="/pillar.svg" data-index="13">
        <img src="/pillar.svg" data-index="14">
        <img src="/pillar.svg" data-index="15">
        <img src="/pillar.svg" data-index="16">
        <img src="/pillar.svg" data-index="1">

        <img src="/pillar.svg" data-index="2">
        <img src="/pillar.svg" data-index="3">
        <img src="/pillar.svg" data-index="4">
        <img src="/pillar.svg" data-index="5">

        <img src="/pillar.svg" data-index="6">
        <img src="/pillar.svg" data-index="7">
        <img src="/pillar.svg" data-index="8">
        <img src="/pillar.svg" data-index="9">

        <img src="/pillar.svg" data-index="10">
        <img src="/pillar.svg" data-index="11">
        <img src="/pillar.svg" data-index="12">
    </div>
</template>

<script>
    import { TweenMax } from 'gsap';

    export default {
        name: 'app',
        mounted() {
            const pillars = Array.from(this.$el.children).sort((a, b) => {
                return parseInt(a.dataset.index) - parseInt(b.dataset.index);
            });

            this.animateScene(this.$el);
            this.animatePillars(pillars);
        },
        methods: {
            animateScene(scene) {
                const duration = 2.649;
                const config = {
                    y: '+=40',
                    ease: Linear.easeNone,
                    onComplete: this.animateScene,
                    onCompleteParams: [scene],
                    // @hack Firefox janks when animating elements in small increments
                    rotation: 0.01,
                };

                TweenMax.to(scene, duration, config);
            },
            animatePillars(pillars) {
                const duration = 0.15;
                const config = { ease: Linear.easeNone, y: '-=40', delay: 1 };
                const overlap = 0.1;

                TweenMax.staggerTo(pillars, duration, config, overlap, this.animatePillars, [pillars]);
            },
        },
        beforeDestroy() {
            TweenMax.killAll();
        },
    };
</script>

<style>
    html, body {
        height: 100%;
    }

    body {
        background-color: rgba(48, 25, 64, 1);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
    }

    html, body, div, img {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    .scene {
        position: relative;
        width: 284px;
        height: 258px;
        display: flex;
    }

    .scene > img {
        height: 135px;
        margin-bottom: 15px;
        position: absolute;
    }

    @media screen and (max-width: 640px) and (orientation: landscape) {
        .scene > img {
            height: 120px;
        }
        .scene {
            width: 280px;
            height: 235px;
        }
    }

    .scene > img:nth-child(1) {
        top: 60px;
        z-index: 4;
    }

    .scene > img:nth-child(2) {
        top: 45px;
        left: 30px;
        z-index: 3;
    }

    .scene > img:nth-child(3) {
        top: 30px;
        left: 60px;
        z-index: 2;
    }

    .scene > img:nth-child(4) {
        top: 15px;
        left: 90px;
        z-index: 1;
    }

    .scene > img:nth-child(5) {
        top: 0;
        left: 120px;
        z-index: 0;
    }

    .scene > img:nth-child(6) {
        top: 15px;
        left: 150px;
        z-index: 1;
    }

    .scene > img:nth-child(7) {
        top: 30px;
        left: 180px;
        z-index: 2;
    }

    .scene > img:nth-child(8) {
        top: 45px;
        left: 210px;
        z-index: 3;
    }

    .scene > img:nth-child(9) {
        top: 60px;
        left: 240px;
        z-index: 4;
    }

    .scene > img:nth-child(10) {
        top: 75px;
        left: 210px;
        z-index: 5;
    }

    .scene > img:nth-child(11) {
        top: 90px;
        left: 180px;
        z-index: 6;
    }

    .scene > img:nth-child(12) {
        top: 105px;
        left: 150px;
        z-index: 7;
    }

    .scene > img:nth-child(13) {
        top: 120px;
        left: 120px;
        z-index: 8;
    }

    .scene > img:nth-child(14) {
        top: 105px;
        left: 90px;
        z-index: 7;
    }

    .scene > img:nth-child(15) {
        top: 90px;
        left: 60px;
        z-index: 6;
    }

    .scene > img:nth-child(16) {
        top: 75px;
        left: 30px;
        z-index: 5;
    }
</style>

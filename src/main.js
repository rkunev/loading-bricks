import { TweenMax, Linear } from 'gsap/TweenMax';

const animateScene = scene => {
    const duration = 2.649;
    const config = {
        y: '+=40',
        ease: Linear.easeNone,
        onComplete: animateScene,
        onCompleteParams: [scene],
        // @hack Firefox janks when animating elements in small increments
        rotation: 0.01,
    };

    TweenMax.to(scene, duration, config);
};

const animatePillars = pillars => {
    const duration = 0.15;
    const config = { ease: Linear.easeNone, y: '-=40', delay: 1 };
    const overlap = 0.1;

    TweenMax.staggerTo(pillars, duration, config, overlap, animatePillars, [pillars]);
};

const scene = document.querySelector('#app');
const pillars = Array.from(scene.children).sort((a, b) => {
    return parseInt(a.dataset.index) - parseInt(b.dataset.index);
});

// kick things off
animateScene(scene);
animatePillars(pillars);

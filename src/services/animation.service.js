/**
 * Animates the provided scene and elements in an infinite loop.
 *
 * @param  {HTMLElement} options.scene           Wrapper for the pillars
 * @param  {number} options.sceneDelay           Add initial delay to the scene animation
 * @param  {HTMLElement[]} options.segments      The pillars
 * @param  {number} options.segmentTweenDuration Animation duration of the individual pillars
 * @param  {number} options.segmentMovement      Number of px to move the pillars.
 *                                               The scene moves in opposite direction with the same amount
 *
 * @return {Object}
 * @return {Object}                              Returns reference to the created timelines
 */
export function animate({ scene = null, sceneDelay = 1000, segments = null, segmentTweenDuration = 175, segmentMovement = 40 }) {
    if (!scene || !segments) {
        console.error('Missing scene or segments. Double check your DOM selectors');
        return;
    }

    segmentTweenDuration = segmentTweenDuration / 1000;

    let sceneTweenDuration = null;
    let segmentTweenOverlap = 0.1;

    let segmentsTimeline = new TimelineMax({
        delay: Math.floor(sceneDelay / 1000),
        onComplete() {
            window.setTimeout(() => {
                /** @this {TimelineMax} */
                animateSegments(this, segments, segmentTweenDuration, segmentMovement, segmentTweenOverlap);
            }, sceneDelay);
        },
    });

    let sceneTimeline = new TimelineMax({
        onComplete() {
            /** @this {TimelineMax} */
            animateScene(this, scene, sceneTweenDuration, segmentMovement);
        },
    });

    animateSegments(segmentsTimeline, segments, segmentTweenDuration, segmentMovement, segmentTweenOverlap);
    sceneTweenDuration = getSegmentsTimelineDuration(segmentsTimeline, sceneDelay);

    animateScene(sceneTimeline, scene, sceneTweenDuration, segmentMovement);

    return {
        scene: sceneTimeline,
        segments: segmentsTimeline
    }
}

/**
 * Destroys all running animations.
 *
 * @return {void}
 */
export function destroy() {
    TweenMax.killAll();
}

function animateSegments(timeline, segments, duration, segmentMovement, segmentTweenOverlap) {
    const overlap = `-=${segmentTweenOverlap}`;
    const y = `-=${segmentMovement}`;

    segments.forEach((segment, index) => {
        if (index === 0) {
            addToTimeline({ timeline, element: segment, duration, y });
        } else {
            addToTimeline({ timeline, element: segment, duration, y, overlap });
        }
    });
}

function animateScene(timeline, scene, duration, movement) {
    const y = `+=${movement}`;
    const ease = Linear.easeNone;

    return addToTimeline({timeline, element: scene, duration, y, ease});
}

function addToTimeline({ timeline, element, duration, y, ease, overlap }) {
    return timeline.add(TweenLite.to(element, duration, {
        y,
        ease,
        rotation: 0.01, // @hack Firefox gliches... *sigh*
    }), overlap);
}

function getSegmentsTimelineDuration(timeline, sceneDelay) {
    return timeline.duration() + Math.floor(sceneDelay / 1000);
}

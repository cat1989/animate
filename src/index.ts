type Animation = {
    duration: number;
    timing: (timeFraction: number) => number;
    draw: (progress: number) => void;
}

const requestAnimationFrame = window.requestAnimationFrame ||
                            function(callback: (time: number) => void) {
                                window.setTimeout(() => {
                                    callback(20)
                                }, 20)
                            }

export default function animate({
    duration = 250,
    timing = (timeFraction: number) => timeFraction,
    draw,
}: Animation) {
    let start = performance.now()
    requestAnimationFrame(function animate(time: number) {
        let timeFraction = Math.min((time - start) / duration, 1)
        let progress = timing(timeFraction)
        draw(progress)
        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }
    })
}

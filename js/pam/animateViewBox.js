
Raphael.fn.animateViewBox = function(currentViewBox, viewX, viewY, width, height, duration, callback) {

    duration = duration || 250;

    var originals = currentViewBox, //current viewBox Data from where the animation should start
    differences = {
        x: viewX - originals.x,
        y: viewY - originals.y,
        width: width - originals.width,
        height: height - originals.height
    },
    delay = 13,
    stepsNum = Math.ceil(duration / delay),
    stepped = {
        x: differences.x / stepsNum,
        y: differences.y / stepsNum,
        width: differences.width / stepsNum,
        height: differences.height / stepsNum
    }, i,
    canvas = this;

    /**
    * Using a lambda to protect a variable with its own scope.
    * Otherwise, the variable would be incremented inside the loop, but its
    * final value would be read at run time in the future.
    */
    function timerFn(iterator) {
        return function() {
            canvas.setViewBox(
                originals.x + (stepped.x * iterator),
                originals.y + (stepped.y * iterator),
                originals.width + (stepped.width * iterator),
                originals.height + (stepped.height * iterator)
                );
            // Run the callback as soon as possible, in sync with the last step
            if(iterator == stepsNum && callback) {
                callback(viewX, viewY, width, height);
            }
        }
    }

    // Schedule each animation step in to the future
    // Todo: use some nice easing
    for(i = 1; i <= stepsNum; ++i) {
        setTimeout(timerFn(i), i * delay);
    }
}
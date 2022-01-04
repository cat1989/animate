"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestAnimationFrame = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(function () {
            callback(20);
        }, 20);
    };
function animate(_a) {
    var _b = _a.duration, duration = _b === void 0 ? 250 : _b, _c = _a.timing, timing = _c === void 0 ? function (timeFraction) { return timeFraction; } : _c, draw = _a.draw;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = Math.min((time - start) / duration, 1);
        var progress = timing(timeFraction);
        draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
exports.default = animate;
//# sourceMappingURL=index.js.map
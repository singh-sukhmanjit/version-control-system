"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.enqueue = function (q, element) {
        q.push(element);
        return q;
    };
    Queue.dequeue = function (q) {
        var element = q[0];
        q.splice(0, 1);
        return element;
    };
    return Queue;
}());
exports.Queue = Queue;

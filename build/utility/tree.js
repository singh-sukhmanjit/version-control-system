"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("./queue");
var Tree = /** @class */ (function () {
    function Tree() {
    }
    Tree.prototype.newNode = function (data, key) {
        var temp = {
            key: key,
            data: data,
            child: []
        };
        return temp;
    };
    Tree.prototype.insertNode = function (parentKey, root, nodeToInsert) {
        if (root.key == parentKey) {
            root.child.push(nodeToInsert);
        }
        else {
            for (var i = 0; i < root.child.length; i++) {
                var child = root.child[i];
                if (child.key == parentKey) {
                    child.child.push(nodeToInsert);
                    break;
                }
                else {
                    this.insertNode(parentKey, child, nodeToInsert);
                }
            }
        }
    };
    Tree.prototype.traverse = function (root) {
        var q = [];
        q.push(root);
        while (q.length) {
            var pop = queue_1.Queue.dequeue(q);
            console.log(pop.data + ' ');
            pop.child.forEach(function (node) {
                queue_1.Queue.enqueue(q, node);
            });
        }
    };
    return Tree;
}());
exports.Tree = Tree;

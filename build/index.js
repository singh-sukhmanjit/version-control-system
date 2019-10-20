"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var tree_1 = require("./utility/tree");
var app = express();
var port = 3000;
app.listen(port, function () {
    console.log("App running on port: " + port);
    var tree = new tree_1.Tree();
    var root = tree.newNode('blob1', 1);
    tree.insertNode(1, root, tree.newNode('blob2', 2));
    tree.insertNode(1, root, tree.newNode('blob3', 3));
    tree.insertNode(2, root, tree.newNode('blob4', 4));
    tree.insertNode(2, root, tree.newNode('blob5', 5));
    tree.insertNode(2, root, tree.newNode('blob6', 6));
    tree.insertNode(3, root, tree.newNode('blob7', 7));
    tree.insertNode(3, root, tree.newNode('blob8', 8));
    tree.insertNode(3, root, tree.newNode('blob9', 9));
    tree.traverse(root);
});
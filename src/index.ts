import express = require('express');
import { Tree } from './utility/tree'
import { Node } from './utility/models/node.model'
const app: express.Application = express();
const port: number = 3000;

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
    const tree = new Tree()
    const root: Node = tree.newNode('blob1', 1)
    tree.insertNode(1, root, tree.newNode('blob2', 2))
    tree.insertNode(1, root, tree.newNode('blob3', 3))
    tree.insertNode(2, root, tree.newNode('blob4', 4))
    tree.insertNode(2, root, tree.newNode('blob5', 5))
    tree.insertNode(2, root, tree.newNode('blob6', 6))
    tree.insertNode(3, root, tree.newNode('blob7', 7))
    tree.insertNode(3, root, tree.newNode('blob8', 8))
    tree.insertNode(3, root, tree.newNode('blob9', 9))
    tree.traverse(root)
})
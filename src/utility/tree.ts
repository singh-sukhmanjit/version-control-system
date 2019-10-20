import { Node } from './models/node.model'
import { Queue } from './queue'
export class Tree {

    newNode(data: string, key: number): Node {
        const temp: Node = {
            key,
            data,
            child: []
        }
        return temp
    }

    insertNode(parentKey: number, root: Node, nodeToInsert: Node): void {
        if(root.key == parentKey) {
            root.child.push(nodeToInsert)
        } else {
            for(let i=0; i<root.child.length; i++) {
                const child = root.child[i]
                if(child.key == parentKey) {
                    child.child.push(nodeToInsert)
                    break
                } else {
                    this.insertNode(parentKey, child, nodeToInsert)
                }
            }
        }
    }

    traverse(root: Node): void {
        let q: Node[] = []
        q.push(root)
        while(q.length) {
            const pop: Node = Queue.dequeue(q)
            console.log(pop.data + ' ')
            pop.child.forEach((node: Node) => {
                Queue.enqueue(q, node)
            })
        }
    }
}
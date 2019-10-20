import { Node } from './models/node.model'

export class Queue {
    static enqueue(q: Node[], element: Node): Node[] {
        q.push(element)
        return q
    }

    static dequeue(q: Node[]): Node {
        const element = q[0]
        q.splice(0, 1)
        return element
    }
}
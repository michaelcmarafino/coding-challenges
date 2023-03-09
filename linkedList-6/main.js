//  Singly linked list

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
        }
    }

    deleteHead() {
        // if linked list is empty
        if (!this.head) {
            return null
        } else {
            let removedHead = this.head
            // if there is only one node in the list
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = removedHead.next
            }
            return removedHead.value
        }
    }

    deleteTail() {
        // if linked list is empty
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail
            // if there is 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                let currentNode = this.head
                while (currentNode.next.next) {
                    currentNode = currentNode.next
                }
                this.tail = currentNode
                currentNode.next = null
            }
            return removedTail.value
        }
    }

    search(value) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next || null
    }
}

let list = new LinkedList()

list.append(2)
list.prepend(1)
list.append(3)
list.append(4)
// console.log(list.search(2))
console.log(list)
console.log(list.deleteTail())
console.log(list)

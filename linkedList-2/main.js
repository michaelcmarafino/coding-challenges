class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    // add to the end of the list / tail
    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.prev = oldTail
        }
    }

    // add to the beginning of the list / head
    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = null
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }
    }

    deletedHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            let removedHead = this.head
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            return removedHead.value
        }
    }

    deleteTail() {
        // if list is empty
        if (!this.tail) {
            return null
        } else {
            let removedTail = this.tail
            // if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
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

    reverseSearch(value) {
        let currentNode = this.tail

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.prev
        }
        return null
    }

    removeAll() {
        while (this.head) {
            this.deletedHead()
        }
    }

    isEmpty() {
        if (!this.head) {
            return true
        }
        return false
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

let list = new LinkedList()
list.append(7)
list.append(9)
list.prepend(8)
list.prepend(3)
console.log(list)
console.log(list.isEmpty())
list.removeAll()
console.log(list)
console.log(list.isEmpty())

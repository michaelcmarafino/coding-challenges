// Singly Linked List

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

    reverseList() {
        let current = this.head
        let prev = null

        while (current) {
            const temp = current.next
            current.next = prev
            prev = current
            current = temp
        }
        return prev
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
list.append(5)
console.log(list)
console.log(list.reverseList())

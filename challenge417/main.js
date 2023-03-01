class LinkedList {
    constructor() {
        this.head = this.tail = null
    }

    append(value) {
        // if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value)
        } else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
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

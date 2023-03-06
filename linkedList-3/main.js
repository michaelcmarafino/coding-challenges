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
            this.tail.prev = oldTail
            oldTail.next = this.tail
        }
    }

    prepend(value) {
        // if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value)
        } else {
            let oldHead = this.head
            this.head = new Node(value)
            this.head.next = oldHead
            oldHead.prev = this.head
        }
    }

    deleteHead() {
        // if list is empty
        if (!this.head) {
            return null
        } else {
            let removedHead = this.head
            // if only 1 node in list
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
            // if 1 node left in list
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

    deleteAll() {
        while (this.head) {
            this.deleteHead()
        }
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next || null
        this.prev = prev || null
    }
}

let list = new LinkedList()

function middleNode(head) {
    slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow.value
}

list.append(1)
list.append(2)
list.prepend(3)
list.append(44)
list.append(64)
list.append(53)
console.log("Middle node value of the Linked list is: ", middleNode(list.head))

// Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head) {}

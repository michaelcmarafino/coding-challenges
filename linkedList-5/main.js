// Singly linked list

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
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next || null
    }
}

let list = new LinkedList()

list.append(1)
list.append(2)
console.log(list)
console.log(Object.getOwnPropertyNames(LinkedList.prototype))
console.log(LinkedList.prototype.appendimage.png)

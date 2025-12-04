class Node {
    constructor(inVal, inNext = null) {
        this.value = inVal;
        this.next = inNext;
    }
}

class LinkedList {

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    append(inValue) {
        const newNode = new Node(inValue);

        if(this.length === 0) {
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else {
            this.lastNode.next = newNode;
            this.lastNode = this.lastNode.next;
        }
        
        this.length++;
    }

    prepend(inValue) {
        if(this.length === 0) {
            const newNode = new Node(inValue);
            this.firstNode = newNode;
            this.lastNode = newNode;
        }
        else {
            const newNode = new Node(inValue, this.firstNode);
            this.firstNode = newNode;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        return this.lastNode;
    }

    at(index) {
        let currNode = this.firstNode;
        for(let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // project never specified that pop() should return anything, but general convention is that pop() should return the removed node, so I'm doing that
    pop() {
        // does nothing and returns null if only empty
        if(this.length === 0) {
            return null;
        }
        else if(this.length === 1) {
            const out = this.firstNode;
            this.firstNode = null;
            this.lastNode = null;
            this.length--;
            return out;
        }
        else {
            let currNode = this.firstNode;

            // loop to second to last node
            while(currNode.next.next != null) {
                currNode = currNode.next;
            }

            const out = currNode.next;
            currNode.next = null;
            this.lastNode = currNode;
            this.length--;
            return out;
        }
    }

    contains(inValue) {
        let currNode = this.firstNode;

        while(currNode != null) {
            if(currNode.value === inValue) {
                return true;
            }
            currNode = currNode.next;
        }

        return false;
    }

    find(inValue) {
        let currNode = this.firstNode;
        let index = 0;

        while(currNode != null) {
            if(currNode.value === inValue) {
                return index;
            }
            currNode = currNode.next;
            index++;
        }

        return null;
    }

    toString() {
        let currNode = this.firstNode;
        let out = '';

        while(currNode != null) {
            out = out + `( ${currNode.value} ) -> `;
            currNode = currNode.next;
        }
        out = out + "null";

        return out;
    }

    insertAt(value, index) {
        // does nothing if you give an index out of bounds
        if(index >= this.length || index < 0) {
            return;
        }

        // insert at index 0
        if(index === 0) {
            this.prepend(value);
            return;
        }

        let currNode = this.firstNode;
        let i = 0;

        // loop to index before input index
        while(i < index - 1) {
            currNode = currNode.next;
            i++;
        }
        
        let newNode = new Node(value, currNode.next);
        currNode.next = newNode;
        this.length++;
    }

    removeAt(index) {
        // does nothing if you give an index out of bounds
        if(index >= this.length || index < 0) {
            return;
        }

        // remove at index 0
        if(index === 0) {
            this.firstNode = this.firstNode.next;
            this.length--;
            return;
        }

        let currNode = this.firstNode;
        let i = 0;

        // loop to index before input index
        while(i < index - 1) {
            currNode = currNode.next;
            i++;
        }

        currNode.next = currNode.next.next;
        this.length--;
    }
}



function deleteNode (value) {
    let currentNode = this.head;
    let preNode = null;
    // 找到要删除的那个结点
    while (currentNode !== null && currentNode.data !== value) {
        preNode = currentNode;
        currentNode = currentNode.next;
    }
    if (currentNode == null) return -1;
    preNode.next = currentNode.next;
}
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
    test () {
        alert(this.data);
    }
}
// 定义链表
class LinkList {
    constructor () {
        this.head = new Node('head');
    }
    delete (value) {
        let currentNode = this.head;
        let preNode = null;
        // 找到要删除的那个结点
        while (currentNode !== null && currentNode.data !== value) {
            preNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode == null) return -1;
        preNode.next = currentNode.next;
    }
    // 指定元素向后插入
    insert (value, element) {
        let currentNode = this.findByValue(element);
        if (currentNode === -1) {
            console.log('meizhaodao');
        }
        let newNode = new Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    // value
    findByValue (value) {
        let currentNode = this.head;
        while (currentNode !== null && currentNode.data !== value) {
            currentNode = currentNode.next;
        }
        return currentNode == null ? -1 : currentNode;
    }
    // index
    findByIndex (index) {
        let num = 0;
        let currentNode = this.head;
        while (currentNode !== null && num !== index) {
            currentNode = currentNode.next;
            num++;
        }
        return currentNode === null ? -1 : currentNode;
    }
}

###### 链表
> [基础数据结构：【动画】如何轻松手写链表？](https://mp.weixin.qq.com/s/hKjkITbCRcnZBafpjiwWJA)

* 将函数抽象成一个结点，然后给函数添加两个属性
* 创建一个构造函数，就可以创造出成千上万个结点
* 
```javascript
function Node (data) {
    this.data = data;
    this.next = null;
}

// 2
class Node {
    constructor (data) {
        this.data = data;
        this.next = null;

    }
}
```

```javascript
// 增加结点
let currentNode = this.findValue(element);
let pre = currentNode.next;

let newNode = new Node(value);
newNode.next = pre;

currentNode.next = newNode;
```
```javascript
// 根据值删除结点
function deleteNode (value) {
    let currentNode = this.head;
    let preNode = null;
    while (current) {

    }
}
```
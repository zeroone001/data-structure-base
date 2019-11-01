// 顺序栈
class ArrayStack {
    constructor (n) {
        this.n = n; // 栈的大小
        this.count = 0; // zhan 中元素个数
        this.items = new Array(n);
    }
    push (item) {
        if (this.n === this.count) {
            return false;
        }
        this.items.push(item);
        this.count++;
        return true;
    }
    pop () {
        if(this.count === 0) return null;
        this.count--;
        // splice
        /* 
            let a = this.items[this.count-1];
            this.items.splice(this.count-1, 1);
        */
        return this.items.pop();
    }
}

let the_stack = new ArrayStack(3);

// 链式栈


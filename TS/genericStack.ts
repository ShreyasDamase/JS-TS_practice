class stack<T> {
    private items: T[] = [];
    public push(item: T): void {
        this.items.push(item);

    }
    pop(): T | undefined {
        return this.items.pop();

    }
    peek(): T {
        return this.items[this.items.length - 1]
    }

}
const s1 = new stack<number>();
s1.push(1)
s1.push(2)
s1.push(3)
console.log(s1)
console.log(s1.pop()); console.log(s1.pop()); console.log(s1.pop()); console.log(s1.pop()); console.log(s1.pop());
console.log(s1)
const s2 = new stack<string>()
s2.push("shre");
console.log(s2)
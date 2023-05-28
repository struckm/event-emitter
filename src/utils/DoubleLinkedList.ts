class Node<T> {
    public value: T;
    public prev: Node<T> | null;
    public next: Node<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
}
  
class DoublyLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    public isEmpty(): boolean {
      return this.head === null;
    }
  
    public addToHead(value: T): void {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    public addToTail(value: T): void {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    public removeHead(): void {
      if (this.isEmpty()) {
        return;
      }
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head!.prev = null;
      }
    }
  
    public removeTail(): void {
      if (this.isEmpty()) {
        return;
      }
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail!.next = null;
      }
    }
  
    public printList(): void {
      let current = this.head;
      let result = '';
  
      while (current !== null) {
        result += current.value.toString() + ' ';
        current = current.next;
      }
  
      console.log(result.trim());
    }
  }
  
  // Example usage:
  const list = new DoublyLinkedList<number>();
  list.addToHead(3);
  list.addToHead(2);
  list.addToHead(1);
  list.addToTail(4);
  list.addToTail(5);
  
  list.printList(); // Output: 1 2 3 4 5
  
  list.removeHead();
  list.removeTail();
  
  list.printList(); // Output: 2 3 4
  
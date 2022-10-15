class Node {
  constructor(value) {
    this.value = value;
    /** @type Node */
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    /** @type Node */
    this.head = null;
    this.size = 0;
  }

  insertAtHead(value) {
    const newNode = new Node(value);

    newNode.nextNode = this.head;

    this.head = newNode;
    this.size++;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.size++;
  }

  forEach(callback) {
    let current = this.head;

    if (!current) {
      return;
    }

    callback(current.value);
    while (current.nextNode) {
      current = current.nextNode;
      callback(current.value);
    }
  }

  print() {
    this.forEach(value => {
      console.log(value);
    });
  }

  /**
   * Merge this list with another
   * @param {LinkedList} anotherList
   * @returns {LinkedList}
   */
  mergeWith(anotherList) {
    return LinkedList.merge(this, anotherList);
  }

  /**
   * Merge to Linked lists
   * @param {LinkedList} listOne
   * @param {LinkedList} listTwo
   * @returns {LinkedList}
   */
  static merge(listOne, listTwo) {
    const maxSize = Math.max(listOne.size, listTwo.size);

    let nodeOne = listOne.head;
    let nodeTwo = listTwo.head;

    const mergedList = new LinkedList();

    for (let i = 0; i < maxSize; i++) {
      let valueOne = nodeOne.value;
      let valueTwo = nodeTwo.value;

      if (valueOne > valueTwo) {
        const tmp = valueOne;

        valueOne = valueTwo;
        valueTwo = tmp;
      }

      typeof valueOne !== 'undefined' && mergedList.add(valueOne);
      typeof valueTwo !== 'undefined' && mergedList.add(valueTwo);

      nodeOne = nodeOne.nextNode || {};
      nodeTwo = nodeTwo.nextNode || {};
    }

    return mergedList;
  }
}

module.exports = LinkedList;

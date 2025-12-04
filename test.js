console.log("creating linked list");
const list = new LinkedList();
console.log(list);
console.log();

console.log("appending: dog, cat, parrot, hamster, snake, turtle");
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log();

console.log("toString: matching order appended");
console.log(list.toString());
console.log();

console.log("prepending: snepard");
list.prepend("snepard");
console.log(list.toString());
console.log();

console.log("pop: start with snep, end with snake");
list.pop();
console.log(list.toString());
console.log();

console.log("size: 6");
console.log(list.size());
console.log();

console.log("head: snep");
console.log(list.head());
console.log();

console.log("tail: snek");
console.log(list.tail());
console.log();

console.log("at(3): parrot");
console.log(list.at(3));
console.log();

console.log("contains('parrot'): true");
console.log(list.contains('parrot'));
console.log();

console.log("contains('salamander'): false");
console.log(list.contains('salamander'));
console.log();

console.log("find('hamster'): 4");
console.log(list.find('hamster'));
console.log();

console.log("insertAt(12345, 2): snep, dog, 12345, cat, parrot, hamster, snake");
list.insertAt(12345, 2);
console.log(list.toString());
console.log();

console.log("removeAt(3): snep, dog, 12345, parrot, hamster, snake");
list.removeAt(3);
console.log(list.toString());
console.log();

console.log("popping all: list should only store two nulls and a 0 by the end");
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop()); // extra edgecase
console.log(list);
console.log();



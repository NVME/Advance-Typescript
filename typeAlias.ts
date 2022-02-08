type String1 = string;

type One = 1 | "One";
//Tuple types
type ArrayOneAndTwo = [1, 2, 3];

type ArgumentType = ['hello' | 'world',  { address: string; name: string; age: number }, number];

declare function testFunc(...args: ArgumentType)

//testFunc('hello',{address:'eee'})

type FirstType<T extends any[]> = T[0]
type firstType = FirstType<ArrayOneAndTwo>

type LenghtOfTypes<T extends { length: any }> = T['length']
type len = LenghtOfTypes<ArrayOneAndTwo>

type Container<T> = { value: T };

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

type LinkedList<T> = T & { next?: LinkedList<T> };

const train: LinkedList<{ name: string }> = {
  name: 'carriage head',
  next: {
    name: 'carriage 2',
    next: { name: 'carriage end' }
  }
}

const carriage = train.next;
console.log(carriage?.next)

//type AwaiteD<T> = T extends Promise<infer U> ? U : T;
type result = Awaited<Promise<{ a: any }>>;

type UnwrapArray<T> = T extends Array<infer U> ? U : never;
type stringofArray = UnwrapArray<One[]>

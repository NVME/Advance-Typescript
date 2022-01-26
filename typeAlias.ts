type String1 = string;

type One = 1 | "One";

type ArrayOneAndTwo = [1, 2, 3];

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
type result = Awaited<Promise<{ a:any }>>;

type UnwrapArray<T> = T extends Array<infer U> ? U : never;
type stringofArray= UnwrapArray<One[]>

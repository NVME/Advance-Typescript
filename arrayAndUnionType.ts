type tupleype = [1, 2, 3]
type unionType = 1 | 2 | 3

const arrayTest: tupleype = [1, 2, 3];
const unionTest: unionType[] = [1, 2, 3];

const arrayOne = [4, 2, 3] as const;
type arrayTypeOne = typeof arrayOne[number]

const Name = ["Jane", "John", "Doe"] as const
type validName = typeof Name[number];

const Direction = ["North", "West", "East", "South"] as const
type CompassType = typeof Direction[number]
type CompassValueType = string | number
const compass: Record<CompassType, CompassValueType> = {
    North: 'dd',
    South: 33,
    East: 'fsdfs',
    West: 'fd'
}

function isValidName(a: unknown): a is validName {
    return Name.indexOf(a as validName) != -1;
}

console.log(isValidName('ewan'))

const names = ["Jane", "John"];
console.log(names.some(x => x === 'ewan'))

export type User = {
    id:number
    firstName: string
    lastName: string
    email: string
    age: number
    married: boolean
}

//let user:User={}

type UserError = Omit<Partial<User>, "id"|"age" | "married"> & {
    age?: string
    married?: string
}

let error:UserError={}
//error.


function add( user:Partial<User>& {email:string}){

}

function update(user:Partial<User> & {id:number}){

}

// add({firstName:'ewan'})
// update({firstName:'ewan'})

import { User } from './UtilityType.ts'

type Pagination<T> = {
    data: T[]
    totalNumber: number
    page: number
    skip: number
}

function findAllUsers(pageNumber: number, pageSize: number): Pagination<User> {
    return {
        data: [
            { id: 1, firstName: "", lastName: "", email: "", age: 10, married: false },
            { id: 2, firstName: "", lastName: "", email: "", age: 10, married: true }
        ],
        totalNumber: 100,
        page: pageNumber,
        skip: pageSize
    };
}

type ListRequest = {
    kind: "ALL"
}

type PaginationListRequest = {
    kind: "PAGINAGED"
    pageNumber: number,
    pageSize: number
}

type Request = ListRequest | PaginationListRequest;

type Response<R> = R extends ListRequest ? Array<User> : Pagination<User>;

function getUsers<T extends Request>(request: T): Response<T> {

    if (isPaginationListRequest(request)) {
        const { pageSize, pageNumber } = request;
        return findAllUsers(pageSize, pageNumber) as Response<T>;
    } else {
        const users: User[] = [
            { id: 1, firstName: "", lastName: "", email: "", age: 10, married: false },
            { id: 2, firstName: "", lastName: "", email: "", age: 10, married: false },
            { id: 3, firstName: "", lastName: "", email: "", age: 10, married: true },
            { id: 4, firstName: "", lastName: "", email: "", age: 10, married: false },
            { id: 5, firstName: "", lastName: "", email: "", age: 10, married: true }
        ];
        return users as Response<T>;
    }
}

function isPaginationListRequest(request: Request): request is PaginationListRequest {
    return request.kind === "PAGINAGED";
}

const usersAll = getUsers({ kind: "ALL" })
console.log("Got all users", usersAll)
const userPaged = getUsers({ kind: "PAGINAGED", pageSize: 2, pageNumber: 3 })
console.log("Got users for page 3", userPaged.data)




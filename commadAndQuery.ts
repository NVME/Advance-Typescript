import { ICart } from './cart.ts'

const CART_ITEMS_SUBTOTAL = "cart.items.subtotal";
const CART_ITEMS_COUNT = "cart.items.counter";
const CART_DIGITAL_SIGNATURE = "cart.digitalSignature";
const SUCCESSFUL_OFFER_CODES = "successful.offer.codes";
const CART_SKUS_IDS = "cart.skus.ids";
const GET_CART = "get.cart";
const CART_ADD_ITEM = "cart.addItem";
const CART_CLEAR_ERRORS = "cart.clearErrors";
const CART_CLEAR = "cart.clear";
const RECOMMENDED_PRODUCTS_SKUID_LIST = "recommended.products.skuids.list";

type ServiceCartQueries = {
    [CART_ITEMS_SUBTOTAL]: undefined;
    [CART_ITEMS_COUNT]: undefined;
    [CART_DIGITAL_SIGNATURE]: undefined;
    [SUCCESSFUL_OFFER_CODES]: undefined;
    [CART_SKUS_IDS]: undefined;
    [GET_CART]: {
        asPlainText?: boolean;
    };
    [RECOMMENDED_PRODUCTS_SKUID_LIST]: undefined;
};
type ServiceCartQueriesResponseType = {
    [CART_ITEMS_SUBTOTAL]: number;
    [CART_ITEMS_COUNT]: number;
    [CART_DIGITAL_SIGNATURE]: string;
    [SUCCESSFUL_OFFER_CODES]: string[];
    [CART_SKUS_IDS]: string[];
    [GET_CART]: ICart;
    [RECOMMENDED_PRODUCTS_SKUID_LIST]: string[];
};

type ServiceCartCommands = {
    [CART_ADD_ITEM]: {
        skuId: string;
        quantity?: number;
        replenishment?: number;
    };
    [CART_CLEAR_ERRORS]: undefined;
    [CART_CLEAR]: undefined;
};
type ServiceCartCommandsReturnType = {
    [CART_ADD_ITEM]: Promise<void>;
    [CART_CLEAR_ERRORS]: undefined;
    [CART_CLEAR]: undefined;
};

type QueryKey = keyof ServiceCartQueries & keyof ServiceCartQueriesResponseType

function query<K extends QueryKey>(name: K, payload?: ServiceCartQueries[K]): ServiceCartQueriesResponseType[K] {
    throw new Error('not implement');
}

type CommandKey = keyof ServiceCartCommands & keyof ServiceCartCommandsReturnType
function command<K extends CommandKey>(name: K, payload?: ServiceCartCommands[K]): ServiceCartCommandsReturnType[K] {
    throw new Error('not implement');
}


query(GET_CART, {
    asPlainText: true
})

query(RECOMMENDED_PRODUCTS_SKUID_LIST)

command(CART_ADD_ITEM, {
    skuId: '11',
    quantity: 1
})

command(CART_CLEAR)

// useless

type FuncType<K extends keyof T & keyof R, T,R> = (name: K, payload?: T[K])=> R[K] 

type command= FuncType<CommandKey,ServiceCartCommands,ServiceCartCommandsReturnType>

let test:command;
test(CART_CLEAR)
test(CART_ADD_ITEM, {
    skuId: '11',
    quantity: 1
})


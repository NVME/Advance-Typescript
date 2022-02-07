export interface ICartItem {
    itemIndex: number;
    skuId: string;
    quantity: number;
    unitPriceWithoutTax: number;
    unitPriceWithTax: number;
    discountedUnitPriceWithoutTax: number;
    discountedUnitPriceWithTax: number;
    discountPercent: number;
    appliedPriceWithoutTax: number;
    appliedPriceWithTax: number;
    tax: number;
    inventoryStatus: string;
}
export interface IAddressAttributes {
    firstName: string;
    lastName: string;
    zipcode: string;
    address: string;
    address2: string;
    country: string;
    city?: string;
    mobileNumber?: string;
    companyName?: string;
    deliveryInstructions?: string;
}
export interface ICartAddress {
    addressMetadataId: string;
    attributes: IAddressAttributes;
}
export interface IShippings {
    shippingAddress: ICartAddress;
    shippingInfo: IShippingInfo;
    shippingMethod: IShippingMethod;
}
export interface IShippingMethod {
    id: string;
    name: string;
    price: string;
    skuId: string;
}
export interface IShippingInfo {
    discountPercent: number;
    discountedPriceWithTax: number;
    discountedPriceWithoutTax: number;
    offerCode: string;
    priceWithTax: number;
    priceWithoutTax: number;
    tax: number;
    selectedShippingDates: ISelectedShippingDates;
}
export interface IMessage {
    readonly threshold: string | null;
    readonly deferred: string | null;
    readonly success: string | null;
    readonly error: string | null;
}
export interface ISessionCartItem {
    itemIndex: number;
    skuId: string;
    quantity: number;
}
export interface ISelectedShippingDates {
    [key: string]: string[];
}
export interface ICartShippingAddress {
    shippingMethodId: string;
    selectedShippingDates: ISelectedShippingDates;
    address: ICartAddress;
}
export interface ISessionCart {
    sessionCartId: string;
    businessUnitId: string;
    userId: string;
    userEmail: string;
    cartItems: ISessionCartItem[];
    manualOfferCodes?: string[];
    shippings: ICartShippingAddress[];
    billing: {
        address: ICartAddress;
    };
    creationDate: string;
    modifiedDate: string;
    chosenSkuIds?: {
        [offerCode: string]: string[];
    };
    samplesToDelete?: {
        [offerCode: string]: string[];
    };
}
export interface IOfferMessage {
    offerCode: string;
    offerType: string;
    message: IMessage;
    shouldDisplay: boolean;
    applyBeforeQualified: boolean;
    doNotDefer: boolean;
}
export interface IValidationMessage {
    type: string;
    message: string;
}
export interface IEffectItem {
    offerCode: string;
    type: string;
    [key: string]: any;
}
export interface ICart {
    sessionCart: ISessionCart;
    userId: string;
    userEmail: string;
    cartItems: ICartItem[];
    shippings?: IShippings[];
    billing: any;
    subTotalWithTax: number;
    subTotalWithoutTax: number;
    totalWithTax: number;
    totalWithoutTax: number;
    totalDiscounts: number;
    cartDiscounts: number;
    tax: number;
    taxPercent: number;
    offerMessages: IOfferMessage[];
    validationMessages: IValidationMessage[];
    effectItems: IEffectItem[];
    manualOfferCodes: string[];
}

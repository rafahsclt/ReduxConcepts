export enum ActionTypes {
    addProductsToCartRequest= 'ADD_PRODUCTS_TO_CARD_REQUEST',
    addProductsToCartSuccess= 'ADD_PRODUCTS_TO_CARD_SUCCESS',
    addProductsToCartFailure= 'ADD_PRODUCTS_TO_CARD_FAILURE'
}

export interface IProduct {
    id: number
    title: string
    price: number
}

export interface ICartItem {
    product: IProduct
    quantity: number
}

export interface ICartState {
    items: ICartItem[]
    failedStockCheck: number[]
}
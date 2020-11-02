import { IProduct, ActionTypes } from "./types";

export function AddProductToCartRequest(product: IProduct) {
    return {
        type: ActionTypes.addProductsToCartRequest,
        payload: {
            product
        }
    }
}

export function AddProductToCartSuccess(product: IProduct) {
    return {
        type: ActionTypes.addProductsToCartSuccess,
        payload: {
            product
        }
    }
}

export function AddProductToCartFailure(productId: number) {
    return {
        type: ActionTypes.addProductsToCartFailure,
        payload: {
            productId
        }
    }
}
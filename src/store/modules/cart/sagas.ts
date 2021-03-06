import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { AddProductToCartFailure, AddProductToCartRequest, AddProductToCartSuccess } from './actions'
import { IState } from '../..'
import { ActionTypes } from './types'
import api from '../../../services/api'

type CheckProductStockRequest = ReturnType<typeof AddProductToCartRequest>

interface IStockResponse {
    id: number
    quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest){
    const { product } = payload

    const currentQuantity: number = yield select((state: IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity || 0
    })

    const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `/stock/${product.id}`)

    if(availableStockResponse.data.quantity > currentQuantity) {
        yield put(AddProductToCartSuccess(product))
    } else {
        yield put(AddProductToCartFailure(product.id))
    }

    console.log(currentQuantity)
}

//Take Latest -> pega a ultima requisição e descarta o restante
//Take leading -> pega a primeira requisição e descarta o restante
//Take Latest -> pega a todas as requisições

export default all([
    takeLatest(ActionTypes.addProductsToCartRequest, checkProductStock)
])
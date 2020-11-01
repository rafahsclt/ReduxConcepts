import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IProduct } from '../store/modules/cart/types'
import api from '../services/api'
import { AddProductToCart } from '../store/modules/cart/actions'

const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([])

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        api.get('products').then(response => setCatalog(response.data))
    }, [])

    const handleAddProductToCart = useCallback((product: IProduct) => {
        dispatch(AddProductToCart(product))
    }, [dispatch])

    return (
        <main>
            <h1>Catalog</h1>

            {catalog.map(product => (
                <article key={product.id}>
                    <strong>{product.title}</strong>{" - "}
                    <span>{product.price}</span>{"  "}

                    <button 
                        type="button"
                        onClick={() => handleAddProductToCart(product)}
                    >
                        Comprar
                    </button>
                </article>
            ))}
        </main>
    )
}
export default Catalog
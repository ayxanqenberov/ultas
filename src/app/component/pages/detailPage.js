"use client"
import { fetchProducts } from '@/store/productsSlice';
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const detailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.product)
    useEffect(() => {
        dispatch(fetchProducts(id))
    }, [dispatch, id])
    return (
        <div>
            {product && (
                <>
                    <img src={product.image} />
                </>
            )}
        </div>
    )
}

export default detailPage

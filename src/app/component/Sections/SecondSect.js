"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/productsSlice';
import { FaLongArrowAltRight } from "react-icons/fa";

const SecondSect = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Yükleniyor...</p>;
  if (status === 'failed') return <p>Hata: {error}</p>;

  return (
    <section className='flex flex-col gap-3 pt-4 px-7'>
      <div className='flex md:w-full min-[320px]:w-full m-auto items-center justify-between'>
        <span className='font-bold md:text-4xl sm:text-xl'>Featured Picture</span>
        <a className='flex items-center gap-1 cursor-pointer hover:text-[#6995B1] duration-500 '>View All Products  <FaLongArrowAltRight /></a>
      </div>
      <div className=' mx-auto grid grid-flow-row place-content-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7'>
        {products.slice(0, 4).map((product) => (
          <div className='bg-white flex flex-col justify-between p-3 rounded-lg' key={product.id}>
            <img className='h-[300px] object-contain' src={product.image} alt={product.title} />
            <span className='pt-2 cursor-pointer hover:text-[#6995B1] duration-500'>{product.title}</span>
            <span className='text-[#6995B1] font-semibold text-lg'>{product.price} $</span>
            <span className='text-[14px] text-gray-400 font-bold bg-slate-100 w-[180px] flex justify-center rounded-lg py-1'>Category : {product.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSect;
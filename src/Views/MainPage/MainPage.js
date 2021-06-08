import React, { useContext, useEffect, useState } from 'react';
import HeroSlider from '../../components/HeroSlider/';
import ProductsList from '../../components/ProductsList';
import ProductsPagination from '../../components/ProductsPagination';
import { storeContext } from '../../contexts/StoreContext';
import MainLayout from '../../Layouts/MainLayout';

export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  return (
    <MainLayout>
      <HeroSlider />
      <ProductsList products={products} />
      <ProductsPagination
        setPage={setPage}
        page={page}
        total={Math.ceil(total / 4)}
      />
    </MainLayout>
  );
}

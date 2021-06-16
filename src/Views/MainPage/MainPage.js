import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

import HeroImg from "../../assets/inages/hero.jpeg";
import HeroImg2 from "../../assets/inages/hero2.jpeg";

export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1); // [page] меняет страницу
  }, [page]);

  const heroSlider = [
    { src: HeroImg, title: "hero" },
    { src: HeroImg2, title: "hero" },
  ];

  return (
    <MainLayout>
      <HeroSlider />
      <ProductsList products={products} />
      <ProductsPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      />
    </MainLayout>
  );
}

import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import ProductsList from '../../components/ProductsList';
import MainLayout from '../../Layouts/MainLayout';

export default function MainPage() {
  return (
    <MainLayout>
      <HeroSlider />
      <ProductsList />
    </MainLayout>
  );
}

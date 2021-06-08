import { Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { storeContext } from '../../contexts/StoreContext';
import MainLayout from '../../Layouts/MainLayout';

export default function SearchResultPage() {
  const { searchValue } = useParams();
  const { fetchSearchProducts, products } = useContext(storeContext);

  useEffect(() => {
    fetchSearchProducts(searchValue);
  }, []);

  return (
    <MainLayout>
      <Typography>Результаты поиска по "{searchValue}"</Typography>
    </MainLayout>
  );
}

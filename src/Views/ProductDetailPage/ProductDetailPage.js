import { IconButton, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/Loader';
import { storeContext } from '../../contexts/StoreContext';
import MainLayout from '../../Layouts/MainLayout';
import ProductSlider from './components/ProductSlider';
import classes from './productDetail.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function ProductDetailPage() {
  const { fetchProductDetail, productDetail } = useContext(storeContext);

  const { id } = useParams();

  useEffect(() => {
    fetchProductDetail(id);
  }, []);

  const handleProductDelete = () => {};

  return (
    <MainLayout>
      {productDetail ? (
        <div className={classes.container}>
          <ProductSlider images={productDetail.images} />

          <div>
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
          </div>

          <Typography variant="h3">{productDetail.title}</Typography>
          <Typography variant="h3">{productDetail.price}</Typography>
          <Typography variant="body1">{productDetail.description}</Typography>
        </div>
      ) : (
        <Loader />
      )}
    </MainLayout>
  );
}

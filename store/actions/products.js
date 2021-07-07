import * as productsActionTypes from './productsActionTypes';
import axios from 'axios';

export const fetchProducts = () => {
  return dispatch => {
    axios(
      'https://thingproxy.freeboard.io/fetch/https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json'
    )
      .then(res => {
        const productsWithPrice = res.data.plants.map(product => {
          return { ...product, price: Math.random() * 40 };
        });

        dispatch({
          type: productsActionTypes.SET_PRODUCTS,
          products: productsWithPrice,
        });
        return productsWithPrice;
      })
      .then(res =>
        axios(
          'https://thingproxy.freeboard.io/fetch/https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json'
        ).then(res => {
          const categories = res.data.categories;

          dispatch({
            type: productsActionTypes.SET_CATAGORIES,
            categories,
          });
        })
      );
  };
};

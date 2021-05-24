import React, { useEffect, useState } from 'react';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../features/productSlice';
import { setCart } from '../features/cartSlice';

function ProductDetail() {
  let { productId } = useParams('productId');
  const [product, setProduct] = useState({});
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(setCart(product));
  };

  useEffect(() => {
    setProduct(products.find((item) => item.id === parseInt(productId)));
  }, [productId, products]);

  return (
    <StyledContainer>
      {product && (
        <StyledProductDetail>
          <ProductImage src={product.image} />
          <ProductInfo>
            <Title>{product.title}</Title>
            <Rating>
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
              <StarRoundedIcon />
            </Rating>
            <Price>Price: €{product.price}</Price>
            <Description>{product.description}</Description>
            <CartButton>
              <Button variant='contained' color='inherit' onClick={addToBasket}>
                <ShoppingCartIcon />
                Add to Basket
              </Button>
            </CartButton>
          </ProductInfo>
        </StyledProductDetail>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 1500px;
  margin: auto;
`;

const StyledProductDetail = styled.div`
  background-color: white;
  height: 600px;
  border-radius: 4px;
  display: flex;
  padding: 20px;
  justify-content: center;
  padding-top: 100px;
`;

const ProductImage = styled.img`
  object-fit: contain;
  flex: 0.6;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h3`
  color: black;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Rating = styled.div`
  .MuiSvgIcon-root {
    fill: var(--primary-color);
  }
`;

const Price = styled.h3`
  color: rgb(177, 39, 36);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 400px;
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
  ::first-letter {
    text-transform: capitalize;
  }
`;

const CartButton = styled.div`
  margin-top: 20px;
  .MuiButton-contained {
    background-color: var(--primary-color);
  }

  .MuiSvgIcon-root {
    fill: white;
    margin-right: 10px;
  }
`;
export default ProductDetail;

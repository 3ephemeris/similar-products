import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import renderImpacts from './impacts/renderImpacts';

const Wrapper = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

const Name = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 280px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 2px;
`;

const Colors = styled.div`
  font-family: Roboto, sans-serif;
  color: grey;
  font-weight: 100;
  font-size: 12px;
`;

const Info = (props) => {
  const { product } = props;
  return (
    <Wrapper>
      {/* modified to have same shape of data  */}
      <Name>{product.product_name}</Name>
      <Price>${product.price}</Price>
      {renderImpacts(product.tag)}
      <Colors>
        <span>{product.num_tags}</span>
        <span> colors</span>
      </Colors>
    </Wrapper>
  );
};

Info.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    impacts: PropTypes.arrayOf(PropTypes.string),
    num_colors: PropTypes.number,
    variations: PropTypes.arrayOf(PropTypes.object),
    relatedProductIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Info;

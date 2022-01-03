import React from 'react';
import { css } from '@emotion/css';

const ProductsStyle = css`
display: flex;
flex-direction: column;
.logo {
    width: 128px;
    margin: 0 auto 25px;
}
`;

function Products() {
    return (
        <div className={ProductsStyle}>
             Products
        <img 
            src='/assets/img/logo.svg' alt='Burger' className='logo'/>
        </div>
    )
}

export default Products;

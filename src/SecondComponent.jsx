import React from 'react';
import Category from './categoryList';
import Products from './productsList';

export default function SecondComponent () {
    return (
        <div className="second">
            <Category />
            <Products />
        </div>
    )
}
import React from 'react';
import Product from './Product';

export function App() {
  const range = (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i);

    return (
        <div className="products">
          {range(1,20).map(number=> (
            <Product
              key={number}
              productId={number}
              productName={number}
            />
          ))}
        </div>
    );
}
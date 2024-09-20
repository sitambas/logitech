import React from 'react';
import Button from '../atoms/Button';

const Tabs = ({products,handleTabClick,setSelectedProductIndex,selectedProductIndex}) => {
  return (
   <>
     {products.length > 3 && (
            <Button classes="text-lg bg-gray-200 px-4 py-2 rounded-lg" 
            text={'<'} 
            onClick={() =>setSelectedProductIndex(selectedProductIndex > 0 ? selectedProductIndex - 1 : products.length - 1)}/>
          )}

          <div className="flex-grow">
            <div className="flex justify-center space-x-2">
              {products.map((product, index) => (
                <Button key={index} classes={`px-4 py-2 rounded-lg ${
                    selectedProductIndex === index
                      ? 'bg-gray-200 text-gray-800 border border-slate-800'
                      : 'bg-gray-200 text-black-800 border border-slate-200'
                  }`}
                text={product.title}
                onClick={() => handleTabClick(index)}/>
               ))}
            </div>
          </div>

          {products.length > 3 && (
            <Button classes="text-lg bg-gray-200 px-4 py-2 rounded-lg" 
                text={'>'} 
                onClick={() =>setSelectedProductIndex((selectedProductIndex + 1) % products.length)}/>
          )}
   </>
  );
};

export default Tabs;

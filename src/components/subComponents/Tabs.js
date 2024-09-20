import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../atoms/CustomButton';


const Tabs = ({ products, handleTabClick, setSelectedProductIndex, selectedProductIndex }) => {
  const scrollableRef = useRef(null);

  const scrollToPrevious = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
    setSelectedProductIndex(
      selectedProductIndex > 0 ? selectedProductIndex - 1 : products.length - 1
    );
  };

  const scrollToNext = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
    setSelectedProductIndex((selectedProductIndex + 1) % products.length);
  };

  return (
    <>
      {products.length > 3 && (
        <CustomButton
          classes="text-lg bg-gray-200 px-4 py-2 rounded-lg"
          text={'<'}
          ariaLabel="Previous product"
          onClick={scrollToPrevious}
        />
      )}
      

      <div className="flex-grow overflow-x-auto overscroll-x-none" ref={scrollableRef}>
        <div className="flex justify-center space-x-2" style={{ width: 'max-content' }}>
          {products.map((product, index) => (
            <CustomButton
              key={index}
              ariaLabel={`Tab-product-panel-${index}`}
              id={`product-tab-${index}`}
              classes={`px-4 py-2 rounded-lg ${
                selectedProductIndex === index
                  ? 'bg-gray-200 text-gray-800 border border-slate-800'
                  : 'bg-gray-200 text-black-800 border border-slate-200'
              }`}
              text={product.title}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
      </div>

      {products.length > 3 && (
        <CustomButton
          classes="text-lg bg-gray-200 px-4 py-2 rounded-lg"
          text={'>'}
          ariaLabel="Next product"
          onClick={scrollToNext}
        />
      )}
    </>
  );
};

Tabs.propTypes = {
    products: PropTypes.array.isRequired,
    handleTabClick: PropTypes.func.isRequired,
    selectedProductIndex: PropTypes.number.isRequired,
  };

export default Tabs;

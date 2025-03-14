import React from 'react';

const ShopFiltering = ({ filterState, filters, setFilterState,clearFilters }) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>

      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />

        {
          filters.categories.map((category) => (
            <label key={category} className='flex capitalize cursor-pointer'>
              <input type="radio" checked={filterState.category === category}
                onChange={(e) => setFilterState({ ...filterState, category })}
                value={category} />
              <span className='ml-1'>{category}</span>
            </label>
          ))
        }
      </div>


      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Color</h4>
        <hr />

        {
          filters.colors.map((color) => (
            <label key={color} className='flex capitalize cursor-pointer'>
              <input
                type="radio"
                checked={filterState.color === color}
                onChange={() => setFilterState({ ...filterState, color })}
                value={color}
              />
              <span className='ml-1'>{color}</span>
            </label>
          ))
        }

      </div>


      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price Range</h4>
        <hr />
        {filters.priceRange.map((price) => (
          <label key={`${price.min}-${price.max}`} className='flex capitalize cursor-pointer'>
            <input
              type="radio"
              checked={filterState.priceRange && filterState.priceRange.min === price.min}
              onChange={() => setFilterState({ ...filterState, priceRange: { min: price.min, max: price.max } })}
              value={`${price.min}-${price.max}`}
            />
            <span className='ml-1'>{price.label}</span>
          </label>
        ))}
      </div>

      <button className='bg-primary py-1 px-4 text-white rounded' onClick={clearFilters}>Clear All filters</button>



    </div>
  );
}

export default ShopFiltering;

import React from 'react';

const ShopFiltering = ({filterState,filters,setFilterState}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>

      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />

        {
          filters.categories.map((category)=>(
            <label key={category} className='flex capitalize cursor-pointer'>
              <input type="radio" checked={filterState.category === category}
               onChange={(e)=>setFilterState({...filterState,category:e.target.value})}
               value={category}/>
              <span className='ml-1'>{category}</span>
            </label>
          ))
        }
      </div>


    </div>
  );
}

export default ShopFiltering;

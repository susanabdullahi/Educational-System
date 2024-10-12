import React from 'react';
import gallery1 from '../assets/gallery-1.png';
import gallery2 from '../assets/gallery-2.png';
import gallery3 from '../assets/gallery-3.png';
import gallery4 from '../assets/gallery-4.png';
import whiteArrow from '../assets/white-arrow.png';

function Campus() {
  return (
    <div id="campus" className='mx-[80px] w-[90%] text-center  '>
      <div className='flex items-center justify-between mb-10 '>
        <img className='w-[23%] rounded-xl' src={gallery1} alt="Gallery Image 1" />
        <img className='w-[23%] rounded-xl' src={gallery2} alt="Gallery Image 2" />
        <img className='w-[23%] rounded-xl' src={gallery3} alt="Gallery Image 3" />
        <img className='w-[23%] rounded-xl' src={gallery4} alt="Gallery Image 4" />
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-xl  mb-6'>See More Here <img className='inline w-5 text-2xl' src={whiteArrow} alt="whiteArrow" /></button>
    </div>
  );
}

export default Campus;

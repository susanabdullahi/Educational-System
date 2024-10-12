import React from 'react';

function Title(probs) {
  return (
    <div className="text-center my-16">
      <p className="text-[#212EA0] text-base font-semibold uppercase">{probs.subtitle}</p>
      <h2 className="text-4xl text-[#000F38] mt-1 font-serif font-bold mt-3">{probs.title}</h2>
    </div>
  );
}

export default Title;

import React from 'react';
import Program1 from '../assets/program-1.png';
import Program2 from '../assets/program-2.png';
import Program3 from '../assets/program-3.png';
import Icon1 from '../assets/program-icon-1.png';
import Icon2 from '../assets/program-icon-2.png';
import Icon3 from '../assets/program-icon-3.png';

function Programs() {
  return (
    <div id="programs" className=" mx-40 flex items-center justify-between " style={{ marginTop: '100px' }}> {/* Adjust marginTop based on your navbar height */}
      {/* Program 1 */}
      <div className="program relative flex-1 max-w-[31%] mx-2 shadow-lg ">
        <img src={Program1} alt="Program 1" className="w-full rounded-lg block shadow-lg shadow-slate-700" />
        <div className="caption absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white opacity-0 hover:opacity-100 transition-all duration-400">
          <img src={Icon1} alt="Icon 1" className="w-14 mb-2" />
          <p className="text-center">Masters Degree</p>
        </div>
      </div>

      {/* Program 2 */}
      <div className="program relative flex-1 max-w-[31%] mx-2">
        <img src={Program2} alt="Program 2" className="w-full rounded-lg block shadow-lg shadow-slate-700 " />
        <div className="caption absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white opacity-0 hover:opacity-100 transition-all duration-400">
          <img src={Icon2} alt="Icon 2" className="w-14 mb-2" />
          <p className="text-center">Masters Degree</p>
        </div>
      </div>

      {/* Program 3 */}
      <div className="program relative flex-1 max-w-[31%] mx-2">
        <img src={Program3} alt="Program 3" className="w-full rounded-lg block shadow-lg shadow-slate-700" />
        <div className="caption absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,15,152,0.3)] flex items-center justify-center flex-col text-white opacity-0 hover:opacity-100 transition-all duration-400">
          <img src={Icon3} alt="Icon 3" className="w-14 mb-2" />
          <p className="text-center">Masters Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;

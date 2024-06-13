import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center border-b py-3 w-full">
      <img src="/assets/logo.webp" alt="Logo" width={204} height={64}/>

      <button className='bg-blue-800 px-8 py-2 rounded-full text-white shadow-xl'>Call</button>
    </nav>
  );
};

export default Navbar;

import React from 'react'

const data=[
  {heading:"RAHEJA DISTRICT VASHI NX COSTING DETAILS", img:"/assets/data1.png", btnTxt:"Download Complete CheatSheet"},
  {heading:"RAHEJA DISTRICT VASHI NX PAYMENT PLAN", img:"/assets/data2.webp", btnTxt:"Download Complete Payments Plan"},
  {heading:"RAHEJA DISTRICT VASHI NX SAMPLE FLAT", img:"/assets/data3.webp", btnTxt:"Download Free E-Brochure"},
  {heading:"RAHEJA DISTRICT VASHI NX AMENITIES ", img:"/assets/data4.webp", btnTxt:"Explore All Amenties"},
  {heading:"360° VIEW", img:"/assets/data5.png", btnTxt:"Download Video"},
  {heading:"PROJECT OVERVIEW VIDEO", img:"/assets/data6.png", btnTxt:"Download Video"},
  {heading:"RAHEJA DISTRICT VASHI NX UNIT PLANS", img:"/assets/data7.webp", btnTxt:"Download All Units Plan"},
  {heading:"RAHEJA DISTRICT VASHI NX FLOOR PLANS", img:"/assets/data8.webp", btnTxt:"Download All Floor Plan"},
  {heading:"RAHEJA DISTRICT VASHI NX LOCATION", img:"/assets/data9.webp", btnTxt:"Book Free Site Visit"},
  {heading:"RAHEJA DISTRICT VASHI NX CONNECTIVITY", img:"/assets/data10.png"},
]

const Home = () => {
  return (
    <div className=''>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col gap-3 items-center">
          <h1 className='text-center font-semibold text-2xl'>RAHEJA DISTRICT VASHI NX</h1>
          <img src="/assets/homeHero.webp" alt="hero bg" />
          <button className='bg-blue-900 px-8 py-2 rounded-full w-full shadow-2xl text-white'>Call Now +91 85197 29264</button>
        </div>

        <div className="flex flex-col gap-4 mx-10">
          <h1 className='text-center font-semibold text-2xl'>RAHEJA DISTRICT VASHI NX PROJECT HIGHLIGHTS</h1>
          <div className="mx-3">
            <h2 className='my-3 font-medium'>Raheja District Vashi Nx</h2>
              
            <ul className='text-xs flex flex-col gap-4'>
              <li className='list-item font-semibold'>Juinagar Navi Mumbai</li>
              <li className='list-item font-semibold'>Buy It Before It’s Too Late luxurious home at highway touch</li>
              <li className='list-item font-semibold'>Vastu Compliant residences</li>
              <li className='list-item font-semibold'>Mivan Construction Technology</li>
              <li className='list-item font-semibold'>Tower A is G+28 with Podium</li>
              <li className='list-item font-semibold'>Premium 2, 3 & 4 BHK</li>
              <li className='list-item font-semibold'>3BHK: 1161 sqft with deck area</li>
              <li className='list-item font-semibold'>Luxury 1 & 2 BHK with World Class Amenities</li>
              <li className='list-item font-semibold'>40+ Years of Excellence</li>
              <li className='list-item font-semibold'>4BHK: 1550 sqft with deck area</li>
              <li className='list-item font-semibold'>RERA Registered</li>
              <li className='list-item font-semibold'>Possession 2024</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-5 items-center">
            <h1 className='text-center font-semibold text-2xl'>BOOK SITE VISIT TODAY</h1>
            <form action="/">
              <input type="text" placeholder='Name*' className='w-full border p-2 text-sm my-2'/>
              <input type="number" placeholder='Number*' className='w-full border p-2 text-sm my-2'/>
              <input type="email" placeholder='Email Id*' className='w-full border p-2 text-sm my-2'/>
              <button type='submit' className='bg-blue-900 px-5 py-2 text-white'>SUBMIT</button>
            </form>
          </div>

        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        <div className="flex flex-col gap-3 items-center">
          <img src="/assets/hero2.webp" alt="hero bg" />
        </div>

        <div className="flex flex-col gap-4 mx-10">
          <h1 className='text-center font-semibold text-2xl'>RAHEJA DISTRICT VASHI NX PROJECT DETAILS</h1>
          <div className="mx-3">
            <h2 className='my-3 font-medium'>Raheja District Vashi Nx</h2>
              
            <ul className='text-xs flex flex-col gap-4'>
              <li className='list-item font-semibold'>Juinagar Navi Mumbai</li>
              <li className='list-item font-semibold'>Buy It Before It’s Too Late luxurious home at highway touch</li>
              <li className='list-item font-semibold'>Vastu Compliant residences</li>
              <li className='list-item font-semibold'>Mivan Construction Technology</li>
              <li className='list-item font-semibold'>Tower A is G+28 with Podium</li>
              <li className='list-item font-semibold'>Premium 2, 3 & 4 BHK</li>
              <li className='list-item font-semibold'>3BHK: 1161 sqft with deck area</li>
              <li className='list-item font-semibold'>Luxury 1 & 2 BHK with World Class Amenities</li>
              <li className='list-item font-semibold'>40+ Years of Excellence</li>
              <li className='list-item font-semibold'>4BHK: 1550 sqft with deck area</li>
              <li className='list-item font-semibold'>RERA Registered</li>
              <li className='list-item font-semibold'>Possession 2024</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-5 items-center">
            <h1 className='text-center font-semibold text-2xl'>BOOK SITE VISIT TODAY</h1>
            
            <img src="/assets/ola.png" alt="" />
            <button className='bg-blue-900 px-8 py-2 rounded-full w-full shadow-2xl text-white text-xs'>Call Now +91 85197 29264</button>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {data.map(({ heading, img, btnTxt }, index) => (
          <div key={index} className="flex flex-col items-center w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-16px)] lg:w-[calc(50%-20px)]">
            <h1 className="text-center font-semibold text-2xl">{heading}</h1>
            {img!="/assets/data10.png"?<img src={img} alt={heading} className="w-full h-64" />:<img src={img} alt={heading} className="w-full h-56" />}
            {btnTxt?<button className="bg-blue-900 px-8 py-2 rounded-full w-full shadow-2xl text-white mt-4">{btnTxt}</button>:""}
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10 my-16">
        <img src="/assets/qr.webp" alt="qr code" className='w-[20rem]'/>
        <h1 className='text-center font-medium text-sm'>Maharera Registration Number <br /> <span className='font-normal'>P51700092758</span></h1>

        <p className='text-center text-[8px]'>Disclaimer: This website is for informational purposes only, managed by a RERA A52000019540 Propweb Realty Services Pvt Ltd. Prices and availability may change. Images are representative. We may share data with RERA developers and send updates. Contact us for the latest information. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home

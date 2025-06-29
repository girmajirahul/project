import React from 'react'
import Slider from "react-slick";
function Carasuol() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };
  return (
    <div className='w-3/4 m-auto'>
        <div className="mt-20">
            <Slider {... settings} >
            {data.map((d)=>(
                <div key={d.name} className='bg-white h-[450px]  text-black rounded-xl'>
                    <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                        <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4 '>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p>{d.review}</p>
                        <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
      
    </div>
  )
}


export default Carasuol


import Slider from 'react-slick';
import jobsData from '../../api/jobs.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CompanieSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {jobsData.map((job) => (
        <div key={job.name} className="bg-white h-[350px] rounded-xl">
          <div className="rounded-t-xl bg-indigo-500 flex justify-center p-4">
            <img src={job.img_url} alt={job.name} className="h-28 w-28 rounded-full" />
          </div>
          <div className="flex flex-col items-center gap-4 p-4">
            <p className="text-xl font-semibold">{job.name}</p>
            <p className="text-center">{job.description}</p>
            <button className="bg-indigo-500 text-white px-6 py-1 rounded-xl">
              Read More
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
}

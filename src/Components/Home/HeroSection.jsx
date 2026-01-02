import image from '../../assets/image1.jpg';

export default function HeroSection() {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="h-85 w-full bg-cover font-serif flex flex-col items-center"
      >
        <h1 className="text-center text-white text-4xl sm:text-5xl pt-10 sm:pt-20">
          Your Career Starts Now
        </h1>
      </div>
    </section>
  );
}

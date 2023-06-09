import AOS from "aos";
import "aos/dist/aos.css";
import BannerImage from "../../../../assets/banner img.png";
AOS.init();

const Banner = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="flex flex-wrap items-center justify-center py-12 bg-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:py-8 lg:px-10">
        <div className="md:flex md:flex-row-reverse items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold mb-4">
              The Most famous Marketplace for
              <span className="font-extrabold text-blue-600 "> TOY CAR</span>
            </h2>
            <p className="text-lg text-gray-700 my-6">
              The Biggest Marketplace for Toy is a vast online platform where
              buyers and sellers connect to trade a wide range of toy. It offers
              an extensive selection, competitive prices, and a seamless
              shopping experience, catering to enthusiasts and collectors alike.
            </p>
            <button className="bg-emerald-300 hover:bg-emerald-400 text-blue-600 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-lg">
                Learn More
              </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 me-20">
            <img className="rounded-lg sm:px-auto" src={BannerImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

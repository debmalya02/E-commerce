import featured from "../../assets/featured.webp";
import { Link } from "react-router-dom";

const FeatureCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse items-center lg:flex-row bg-green-50 rounded-3xl">
        {/* Left content */}
        <div className="lg:w-1/2 p-8 text-center lg:text-left">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of fashion.
          </p>
          <Link
            to="/colections/all"
            className="bg-black text-white px-6 py-2 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Content*/}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCollection;

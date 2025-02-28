import Hero from "../components/Layout/Hero";
import FeatureCollection from "../components/Products/FeatureCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts =[
    {
        _id: "1",
        name: "product 1",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=1",
            altText: "product 1",}],
      },
      {
        _id: "2",
        name: "product 2",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=2",
            altText: "product 2",}],
      },
      {
        _id: "3",
        name: "product 3",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=3",
            altText: "product 3",}],
      },
      {
        _id: "4",
        name: "product 4",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=4",
            altText: "product 4",}],
      },
      {
        _id: "5",
        name: "product 5",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=5",
            altText: "product 5",}],
      },
      {
        _id: "6",
        name: "product 6",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=6",
            altText: "product 6",}],
      },
      {
        _id: "7",
        name: "product 7",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=7",
            altText: "product 7",}],
      },
      {
        _id: "8",
        name: "product 8",
        price: 100,
        images: [
          {
            url: "https://picsum.photos/500/500?random=8",
            altText: "product 8",}],
      },
]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font bold mb-4">Best Seller</h2>
      <ProductDetails />
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeatureCollection/>
      <FeaturesSection/>
    </div>
  );
};

export default Home;

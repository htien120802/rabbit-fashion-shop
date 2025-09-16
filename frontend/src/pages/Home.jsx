import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Product/FeaturedCollection"
import FeatureSection from "../components/Product/FeatureSection"
import GenderCollectionSection from "../components/Product/GenderCollectionSection"
import NewArrivals from "../components/Product/NewArrivals"
import ProductDetail from "../components/Product/ProductDetail"
import ProductGrid from "../components/Product/ProductGrid"

const placeholderProducts = [
    {
        _id: "1",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=3",
            }
        ]
    },
    {
        _id: "2",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=4",
            }
        ]
    },
    {
        _id: "3",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=5",
            }
        ]
    },
    {
        _id: "4",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=6",
            }
        ]
    },
        {
        _id: "5",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=7",
            }
        ]
    },
    {
        _id: "6",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=8",
            }
        ]
    },
    {
        _id: "7",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=9",
            }
        ]
    },
    {
        _id: "8",
        name: "Stylish Jacket",
        price: 120,
        image: [
            {
                url: "https://picsum.photos/500/500?random=10",
            }
        ]
    },
];

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/* Best Seller */}
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <ProductDetail />

        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>

        <FeaturedCollection />
        <FeatureSection />
    </div>
  )
}

export default Home
import HomeWelcomeSection from "../components/HomeWelcomeSection";
import HomeInspirationSection from "../components/HomeInspirationSection";

const Home = () => {
  return (
    <div className="h-100 text-center bg-black">
      <HomeWelcomeSection />
      <HomeInspirationSection />
    </div>
  );
};

export default Home;

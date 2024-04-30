import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";
import Subscribe from "../components/Subscribe/Subscribe";
import Updated from "../components/updated/updated";
import DownloadContent from "../components/inc/DownloadContent";
import Earn from "../components/Earn/Earn";
import Hero from "../components/inc/Hero";
import Wavyline from "../components/inc/Wavyline";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wavyline />
      <DownloadContent />
      <Earn />
      <Subscribe />
      <Faqs />
      <Updated />
      <Footer />
    </div>
  );
};
export default Home;

import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Game from "../components/Game";
import Footer from "../components/Footer";
import ImageContent from "../components/ImageContent";
function Home() {
  return (
    <>
      <main>
        <Hero />
        <ImageContent />
        <Feature />
        <Game />
      </main>
      <Footer className="relative b-0" />
    </>
  );
}

export default Home;

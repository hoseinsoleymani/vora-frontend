import PageIntro from "./components/pageIntro/pageIntro";
import SearchBar from "./components/searchBar";
import Offer from "./components/offer/offer";
import Faq from "./components/faq/faq"; 
import TravelBanner from "./components/travelStats/travelBanner";


export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <section className="mt-8">
        <PageIntro />
      </section>
      <section className="mt-60">
        <SearchBar />
      </section>
      <section className="mt-60">
        <Offer />
      </section>
      <section className="mt-60">
        <TravelBanner />
      </section>
      <section className="mt-60">
        <Faq />
      </section>
    </div>
  );
}

import PageIntro from "./components/pageIntro";
import SearchBar from "./components/searchBar";
import Offer from "./components/offer";
import Faq from "./components/faq";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6 gap-6 ">
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
        <Faq />
      </section>
    </div>
  );
}

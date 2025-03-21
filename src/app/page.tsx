import Offer from "./components/offer";
import PageIntro from "./components/pageIntro";
import SearchBar from "./components/searchSection/searchBar";


export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 ">
      <section>
        <PageIntro />
      </section>
      <section className="mt-8">
        <SearchBar />
      </section>
      <section className="mt-60">
        <Offer />
      </section>
    </div>
  );
}

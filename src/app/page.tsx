import PageIntro from "./components/pageIntro";
import SearchBar from "./components/searchSection/searchBar";
import Offer from "./components/offer";
import Faq from "./components/faq"; 



export default function Home() {
	return (
		<div className="max-w-screen-xl mx-auto mt-16">
      <section className="mt-60">
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

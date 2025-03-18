import Faq from "./components/faq";
import Offer from "./components/offer";
import PageIntro from "./components/pageIntro";
import TransportOptions from "./components/transportOptions";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16">
      <section>
        <PageIntro />
      </section>
      <section className="mt-8">
        <TransportOptions />
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

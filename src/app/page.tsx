import Offer from "./components/offer";
import PageIntro from "./components/pageIntro";
import TransportOptions from "./components/transportOptions";
import TravelBanner from "./components/travelBanner";

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
        <TravelBanner />
      </section>
    </div>
  );
}

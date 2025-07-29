import Slider from "./slider";
import SiteInfo from "./siteInfo";
function PageIntro() {
  return (
    <div className="flex items-center justify-center gap-6">
      <SiteInfo />
      <Slider />
    </div>
  );
}

export default PageIntro;

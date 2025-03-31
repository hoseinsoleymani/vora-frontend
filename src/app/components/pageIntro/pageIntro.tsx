import Slider from "./slider";
import SiteInfo from "./siteInfo";
function PageIntro() {
  return (
    <div className="flex items-center justify-between">
      <SiteInfo />
      <Slider />
    </div>
  );
}

export default PageIntro;

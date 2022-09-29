import AboutMe, { links as AboutMeLinks } from "../components/AboutMe/AboutMe";
import IntroSection, {
  links as IntroSectionLinks,
} from "../components/IntroSection/IntroSection";
import WhereIveWorked from "../components/WhereIveWorked/WhereIveWorked";
import { links as SubHeadingStyles } from "../components/shared/SubHeading/SubHeading";
import { links as LinkStyles } from "../components/shared/ExternalLink/ExternalLink";
import { links as JobTileStyles } from "../components/shared/JobTile/JobTile";
import Footer from "../components/Footer/Footer";
import Contribution from "../components/Contribution/Contribution";
import Navigation, {
  links as NavigationStyles,
} from "../components/Navigation/Navigation";
import ContactMe from "../components/Contact/Contact";
import Channels from "../components/Channels/Channels";

export function links() {
  return [
    ...IntroSectionLinks(),
    ...AboutMeLinks(),
    ...SubHeadingStyles(),
    ...LinkStyles(),
    ...NavigationStyles(),
    ...JobTileStyles(),
  ];
}

const Index = () => (
  <>
    <Navigation />
    <main>
      <IntroSection />
      <AboutMe />
      <WhereIveWorked />
      <Contribution />
      <Channels />
      <ContactMe />
    </main>
    <Footer />
  </>
);

export default Index;

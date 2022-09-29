import AboutMe, { links as AboutMeLinks } from "../components/AboutMe/AboutMe";
import IntroSection, {
  links as IntroSectionLinks,
} from "../components/IntroSection/IntroSection";
import WhereIveWorked from "../components/WhereIveWorked/WhereIveWorked";
import { links as SubHeadingStyles } from "../components/shared/SubHeading/SubHeading";
import { links as LinkStyles } from "../components/shared/ExternalLink/ExternalLink";
import Footer from "../components/Footer/Footer";
import Contribution from "../components/Contribution/Contribution";
import Navigation, {
  links as NavigationStyles,
} from "../components/Navigation/Navigation";
import ContactMe from "../components/Contact/Contact";

export function links() {
  return [
    ...IntroSectionLinks(),
    ...AboutMeLinks(),
    ...SubHeadingStyles(),
    ...LinkStyles(),
    ...NavigationStyles(),
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
      <ContactMe />
    </main>
    <Footer />
  </>
);

export default Index;

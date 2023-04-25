import type { V2_MetaFunction } from "@remix-run/node";
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
import React from "react";



export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

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

import SubHeading from "../shared/SubHeading/SubHeading";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const AboutMe = () => (
  <section id="about-me" className="mx-auto max-w-7xl lg:w-full">
    <div className="pb-8 sm:pb-16 md:pb-20  lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="About Me" />
        <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Hello! I'm Jordan, a engineer manager based in Miami, Florida. I enjoy
          building teams and create clever solutions that are both scalable and
          performant while providing engaging, pixel-perfect user experiences.
          <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        <p>Here are a few technologies I've been working with recently:</p>

        <ul className="mt-3 text-base text-slate-200 sm:text-lg md:text-xl">
          <li>Typescript</li>
          <li>Auth0</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutMe;

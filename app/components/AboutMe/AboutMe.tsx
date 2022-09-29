import SubHeading from "../shared/SubHeading/SubHeading";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const AboutMe = () => (
  <section id="about-me" className="mx-auto max-w-7xl lg:w-full">
    <div className="pb-8 sm:pb-16 md:pb-20  lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="About Me" />
        <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Hello! I'm Jordan, a engineer manager based in Miami, FL. I enjoy
          creating clever solutions that are scalable and performant while
          providing engaging, pixel-perfect user experiences.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMe;

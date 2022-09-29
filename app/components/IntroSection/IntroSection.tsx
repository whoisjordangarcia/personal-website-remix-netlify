import { TypeAnimation } from "react-type-animation";
import ExternalLink from "../shared/ExternalLink/ExternalLink";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const typingSequence = [
  " ",
  1500,
  "Hello!",
  3000,
  "G'day mate!",
  4000,
  "¡Hola!",
  5000,
  "bonjour!",
  5000,
];

const IntroSection = () => (
  <div className="mx-auto h-screen max-w-7xl columns-2">
    <div className="z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className={"section mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:tracking-tight">
            <TypeAnimation
              sequence={typingSequence}
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-rose-400 sm:text-5xl md:text-7xl">
            I'm Jordan Garcia
          </h1>
          <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            I'm a engineering manager at{" "}
            <ExternalLink href="https://www.invitae.com">@invitae</ExternalLink>{" "}
            and likes to build things for the web on my spare time.
          </p>

          <a href="#about-me">
            <button className="mt-6 text-xl font-semibold text-white transition duration-300 ease-in-out hover:scale-110 hover:text-rose-400">
              Learn more about me
            </button>
          </a>
        </div>
      </div>

      <div>
        <img
          className="ml-20 w-96 rounded-full"
          src="https://www.jordangarcia.me/static/profile_photo.0983212-a55c887d58fbf09542a9ce8db579a8b8.png"
          alt="Jordan Garcia portrait"
        />
      </div>
    </div>
  </div>
);

export default IntroSection;

import SubHeading from "../shared/SubHeading/SubHeading";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const WhereIveWorked = () => (
  <section id="where-ive-worked" className="mx-auto max-w-7xl">
    <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="Where I've Worked" />
        <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Invitae
        </p>
      </div>
    </div>
  </section>
);

export default WhereIveWorked;

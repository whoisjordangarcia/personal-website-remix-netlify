import JobTile from "../shared/JobTile/JobTile";
import SubHeading from "../shared/SubHeading/SubHeading";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const WhereIveWorked = () => (
  <section id="where-ive-worked" className="mx-auto max-w-7xl">
    <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="Where I've Worked" />
        {/* <p className="mt-3 text-base text-slate-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Invitae
        </p> */}

        <JobTile
          company="Invitae, NY"
          roles={[
            {
              roleName: "Engineering Manager",
              dateStart: "May 2021",
              dateEnd: "Present",
            },
            {
              roleName: "Technical Lead",
              dateStart: "Dec 2019",
              dateEnd: "May 2021",
            },
            {
              roleName: "Senior Software Engineer",
              dateStart: "Nov 2018",
              dateEnd: "Dec 2019",
            },
          ]}
        />
        <JobTile
          company="TodayTix, NY"
          roles={[
            {
              roleName: "Senior Software Engineer",
              dateStart: "Oct 2017",
              dateEnd: "Oct 2018",
            },
          ]}
        />
        <JobTile
          company="Tigerspike, NY"
          roles={[
            {
              roleName: "Senior Software Engineer",
              dateStart: "Feb 2014",
              dateEnd: "Sept 2015",
            },
          ]}
        />
        <JobTile
          company="Tigerspike, SYD"
          roles={[
            {
              roleName: "Software Engineer",
              dateStart: "Feb 2014",
              dateEnd: "Sept 2015",
            },
          ]}
        />
        <JobTile
          company="Simbiotic, PER"
          roles={[
            {
              roleName: "Software Engineer",
              dateStart: "Jul 2011",
              dateEnd: "Nov 2011",
            },
          ]}
        />
      </div>
    </div>
  </section>
);

export default WhereIveWorked;

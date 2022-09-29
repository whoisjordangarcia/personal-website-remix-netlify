import ExternalLink from "../shared/ExternalLink/ExternalLink";
import SubHeading from "../shared/SubHeading/SubHeading";

const Contribution = () => (
  <section id="contribution" className="mx-auto max-w-7xl">
    <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
      <div className="sm:text-center lg:text-left">
        <SubHeading subHeading="Contribution" />
        <ExternalLink href="https://github.com/whoisjordangarcia">
          <img
            className="max-w-full p-10"
            src="https://ghchart.rshah.org/fb7171/whoisjordangarcia"
            alt="Jordan Garcia's Github chart"
            loading="lazy"
          />
        </ExternalLink>
      </div>
    </div>
  </section>
);

export default Contribution;

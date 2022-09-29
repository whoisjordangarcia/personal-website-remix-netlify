import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  subHeading: string;
}

const SubHeading = ({ subHeading }: Props) => (
  <h3 className="subHeading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl md:tracking-tight">
    {subHeading}
  </h3>
);

export default SubHeading;

import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  subHeading: string;
}

const SubHeading = ({ subHeading }: Props) => (
  <h3 className="subHeading text-2xl font-bold tracking-tight text-white sm:text-2xl md:text-2xl md:tracking-tight">
    {subHeading}
  </h3>
);

export default SubHeading;

import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  children: React.ReactNode;
  href: string;
}

const ExternalLink = ({ children, href }: Props) => (
  <a href={href} className={"link text-rose-300"} target="__blank">
    {children}
  </a>
);

export default ExternalLink;

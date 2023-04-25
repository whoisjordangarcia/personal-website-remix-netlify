import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

interface Role {
  roleName: string;
  dateStart: string;
  dateEnd: string;
}

interface Props {
  company: string;
  roles: Role[];
}

const JobTile = ({ company, roles }: Props) => (
  <div className="text-base text-white sm:text-lg md:text-xl">
    <p>{company}</p>
    {roles?.map((role) => (
      <div key={role.roleName}>
        <span className="role-name">{role.roleName}</span>
        <span className="role-duration">
          {role.dateStart} - {role.dateEnd}
        </span>
      </div>
    ))}
  </div>
);

export default JobTile;

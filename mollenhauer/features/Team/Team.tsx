import { FC, ReactNode } from "react";

import { H2 } from "@/components/H2/H2";

import { teamList } from "@/shared/mocks/content";

import s from "./Team.module.scss";
import { TeamDepartment } from "@/components/TeamDepartment/TeamDepartment";
import { TeamMember } from "@/components/TeamMember/TeamMember";

export const Team: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H2 className={s.title} text="Meet the Team"></H2>
      <p className={s.subtitle}>
        These are the experts that turn ideas into reality
      </p>
      <ul className={s.teamList}>
        {teamList.map((el) => (
          <li key={el.department}>
            <TeamDepartment
              department={el.department}
              isAdmin={el.team[0]?.isAdmin}
            >
              {el.team.map((team) => (
                <li key={team.id}>
                  <TeamMember {...team} />
                </li>
              ))}
            </TeamDepartment>
          </li>
        ))}
      </ul>
    </section>
  );
};

import { FC, ReactNode } from "react";
import Link from "next/link";

import { H2 } from "@/components/H2/H2";
import { ArrowToIcon } from "@/components/Icons/ArrowToIcon/ArrowToIcon";

import s from "./Support.module.scss";
import { H3 } from "@/components/H3/H3";

export const Support: FC = (): ReactNode => {
  return (
    <section className={s.section}>
      <H2 className={s.title} text="Holistic. Agile. Reliable"></H2>
      <div className={s.description}>
        <div className={s.thesis}>
          <p className={s.subtitle}>
            With this triad we line up to support you to realize your projects
            successfully.
          </p>
          <Link href="#">
            <ArrowToIcon className={s.icon} />
          </Link>
        </div>
        <div className={s.text}>
          <p>
            Today’s construction projects are notable for the diversity of their
            requirements. While you want your buildings to be safe, economical,
            and durable, they primarily serve your operations. Our deep industry
            knowledge helps to optimally incorporate the variety of usage
            requirements of the cement production processes into civil design.
          </p>
          <p>
            We constantly achieve client success by following these three core
            values for all projects our clients trust us with.
          </p>
        </div>
      </div>
      <ul className={s.list}>
        <li>
          <H3 className={s.itemTitle} text="Holistic planning" />
          <p className={s.itemText}>
            Through continuous consideration of all circumstances, we create
            futureproof buildings and frictionless construction workflows.
            Systematic implementation of this holistic approach helps us to keep
            the bird’s-eye view over all interfaces. We are proactively making
            sure that all included parties can focus on working towards the
            optimal project result.
          </p>
        </li>
        <li>
          <H3 className={s.itemTitle} text="Agile acting" />
          <p className={s.itemText}>
            Our team can put results down on paper rapidly. In a world that is
            increasingly characterized by changing and adapting to uncertain
            circumstances, we can flexibly execute on multiple iterations of the
            project in close consultation with the client. This allows us to
            cater to your construction needs until the last phases of planning.
          </p>
        </li>
        <li>
          <H3 className={s.itemTitle} text="Reliable realisation. " />
          <p className={s.itemText}>
            We prioritize project success over everything. Based on our decades
            of experience we have developed the highest quality standards and
            demonstrate with every new project our commitment to meeting and
            exceeding client expectations.
          </p>
        </li>
      </ul>
    </section>
  );
};

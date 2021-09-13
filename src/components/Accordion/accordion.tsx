import { Fragment } from "react";
import "./accordion.css";

type AccordionType = {
  title: string;
  children: JSX.Element;
};

export const Accordion = ({ title, children }: AccordionType) => {
  return (
    <Fragment>
      <details className="accordion">
        <summary className="pointer list-none" style={{ fill: "white" }}>
          <svg width="10" height="10" className="mr-2">
            <polygon points="0,0 0,10 10,5" />
          </svg>
          {title}
        </summary>
        {children}
      </details>
    </Fragment>
  );
};

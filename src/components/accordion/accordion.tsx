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
        <summary className="accordion-title mr-4">
          <svg width="10" height="10">
            <polygon points="0,0 0,10 10,5" />
          </svg>
          {title}
        </summary>
        {children}
      </details>
      <div className="mt-4">TESTE</div>
    </Fragment>
  );
};

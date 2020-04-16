import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion, AccordionItem } from '../src/Accordion';

function App(): JSX.Element {
  return (
    <>
      <h1>react-a11y-accordion examples</h1>

      <h2>Default - all closed</h2>
      <Accordion>
        <AccordionItem header="Accordion header 1">
          Accordion content 1&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 2">
          Accordion content 2&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 3">
          Accordion content 3&hellip;
        </AccordionItem>
      </Accordion>

      <hr />

      <h2>Default - first open</h2>
      <Accordion>
        <AccordionItem header="Accordion header 1" open>
          Accordion content 1&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 2">
          Accordion content 2&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 3">
          Accordion content 3&hellip;
        </AccordionItem>
      </Accordion>

      <hr />

      <h2>Set so only one item can be open at a time</h2>
      <Accordion onlyOneOpen>
        <AccordionItem header="Accordion header 1">
          Accordion content 1&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 2">
          Accordion content 2&hellip;
        </AccordionItem>
        <AccordionItem header="Accordion header 3">
          Accordion content 3&hellip;
        </AccordionItem>
      </Accordion>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

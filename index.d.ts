import * as React from 'react';
import {
  AccordionInterface,
  AccordionStateInterface,
  AccordionItemInterface
} from './src/Accordion';

export declare class Accordion extends React.Component<
  AccordionInterface,
  AccordionStateInterface
> {
  private itemId;
  private allItems;
  constructor(props: AccordionInterface);
  componentDidMount(): void;
  private onSelect;
  private closeAll;
  private getItems;
  render(): JSX.Element;
}

export declare const AccordionItem: ({
  header,
  id,
  onSelect,
  open
}: AccordionItemInterface) => JSX.Element;

declare module 'accordion' {}

declare module 'accordion-item' {}

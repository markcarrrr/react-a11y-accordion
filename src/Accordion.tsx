import * as React from 'react';

export interface AccordionInterface {
  className?: string;
  onlyOneOpen?: boolean;
  onSelect?(isOpen: boolean, currentId: string): void;
}

export interface AccordionStateInterface {
  [id: string]: boolean;
}

export interface AccordionItemInterface {
  children: React.ReactNode;
  header: string;
  id?: string;
  onSelect?(isOpen: boolean, currentId: string): void;
  open?: boolean;
}

export const AccordionItem = ({
  children,
  header,
  id,
  onSelect,
  open
}: AccordionItemInterface) => {
  const onAction = (event: React.MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();

    onSelect(!open, id);
  };

  return (
    <details className="react-a11y-accordion__item" id={id} open={open}>
      <summary className="react-a11y-accordion__header" onClick={onAction}>
        {header}
      </summary>
      <div className="react-a11y-accordion__content">{children}</div>
    </details>
  );
};

export class Accordion extends React.Component<
  AccordionInterface,
  AccordionStateInterface
> {
  private itemId: string;

  private allItems: AccordionStateInterface[] = [];

  constructor(props: AccordionInterface) {
    super(props);

    this.itemId = `react-a11y-accordion__item-id-${new Date().getTime()}`;

    this.state = {};
  }

  public componentDidMount() {
    this.allItems.map((item) => this.setState(item));
  }

  private onSelect = (isOpen: boolean, currentId: string) => {
    const { onlyOneOpen, onSelect } = this.props;

    if (onSelect) {
      onSelect(isOpen, currentId);
    }

    if (onlyOneOpen) {
      this.closeAll();
    }

    this.setState({
      [currentId]: isOpen
    });
  };

  private closeAll = () => {
    Object.keys(this.state).map((item) => this.setState({ [item]: false }));
  };

  private getItems = () => {
    const { children } = this.props;

    return React.Children.toArray(children).filter(
      (item: React.ReactElement<AccordionItemInterface>) => {
        if (item.type === AccordionItem) {
          return item;
        }

        return null;
      }
    );
  };

  render() {
    const { className = '', onlyOneOpen } = this.props;

    const classNames = `react-a11y-accordion ${className}`;

    const childItems = this.getItems();

    let openIsSet = false;

    const items = React.Children.map(
      childItems,
      (item: React.ReactElement<AccordionItemInterface>, index) => {
        const { children, header, id, open } = item.props;

        const itemId = id || `${this.itemId}-${index}`;

        const { [itemId]: isOpen } = this.state;

        if (this.allItems.length <= childItems.length) {
          if (onlyOneOpen) {
            this.allItems.push({
              [itemId]: openIsSet ? false : open
            });

            if (open) {
              openIsSet = true;
            }
          } else {
            this.allItems.push({
              [itemId]: open || false
            });
          }
        }

        return (
          <AccordionItem
            header={header}
            id={itemId}
            onSelect={this.onSelect}
            open={isOpen}
          >
            {children}
          </AccordionItem>
        );
      }
    );

    return <div className={classNames}>{items}</div>;
  }
}

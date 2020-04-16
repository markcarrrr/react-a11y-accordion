# react-a11y-accordion

A ReactJS accessible accordion utilising the HTML `<details>` and `<summary>` tags for native semantics and accessibility. 

> Browser support - Can I use HTML5 `<details>`: https://caniuse.com/#feat=details

> Supports React 16.0.0 or newer.

## Installing

```
yarn add @markcarrrr/react-a11y-accordion
```

OR

```
npm install --save @markcarrrr/react-a11y-accordion
```

## Example Usage

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion>
    <AccordionItem header="Accordion header 1">
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

## Props

### Required

`header`

 * type: `string`
 * default: `"react-a11y-accordion"`

Pass in text for the accordion header (output within the `<summary>` tag).

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion>
    <AccordionItem header="Accordion header 1">
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

### Optional

`onlyOneOpen`

 * type: `boolean`
 * default: `false`

Allow only one accordion item to be open at any time. Please note if for any reason multiple `open` props are added to the `<AccordionItem>` child components then only the first item with an `open` prop will be open.

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion onlyOneOpen>
    <AccordionItem header="Accordion header 1">
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

`onSelect`

 * type: `(isOpen: boolean, currentId: string): void;`
 * default: `undefined`

Callback on accordion item selection. Returns open state and id for selected item.

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion onSelect={() => {})}>
    <AccordionItem header="Accordion header 1">
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

`id`

 * type: `string`
 * default: auto-generated

Pass in an id for the accordion item wrapper (applied on the `<details>` tag).

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion>
    <AccordionItem header="Accordion header 1" id="accordion-id-1">
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2" id="accordion-id-2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

`open`

 * type: `boolean`
 * default: `false`

Add if you want the item open by default (applied on the `<details>` tag). Please note if `onlyOneOpen` has been added to `<Accordion>` and for any reason multiple `open` props are added to the `<AccordionItem>` child components then only the first item with an `open` prop will be open.

```js
import { Accordion, AccordionItem } from '@markcarrrr/react-a11y-accordion';

export default () => (
  <Accordion>
    <AccordionItem header="Accordion header 1" open>
        Accordion content 1.
    </AccordionItem>
    <AccordionItem header="Accordion header 2">
        Accordion content 2.
    </AccordionItem>
  </Accordion>
);
```

## Styling

There is purposfully no styling added allowing you to style as required from a clean state.

The BEM methodology has been used for classnames.

```html
<div class="react-a11y-accordion">
  <details class="react-a11y-accordion__item">
    <summary class="react-a11y-accordion__header">...</summary>
    <div class="react-a11y-accordion__content">...</div>
  </details>
</div>
```

## Development

### Initial steps
 1. `git clone https://github.com/markcarrrr/react-a11y-accordion.git`
 1. `yarn install`

### Scripts

#### Build code
`yarn build`

#### Start local dev server
`yarn start`

#### Lint code
`yarn lint`

#### Format code
`yarn format`

#### Run tests
`yarn test`

## Authors

* **Mark Carr** - *Initial work* - [markcarrrr](https://github.com/markcarrrr)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

import * as React from 'react';
import { shallow } from 'enzyme';
import { Accordion, AccordionItem } from './Accordion';

describe('Accordion', () => {
  let component = shallow(
    <Accordion className="test-classname">
      <AccordionItem header="Test header 1" id="test-id-1" open>
        Test content 1
      </AccordionItem>
      <AccordionItem header="Test header 2" id="test-id-2">
        Test content 2
      </AccordionItem>
      <AccordionItem header="Test header 3" id="test-id-3" open>
        Test content 3
      </AccordionItem>
    </Accordion>
  );

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match passed in classname', () => {
    expect(component.hasClass('test-classname')).toBe(true);
  });

  it('should use passed in id', () => {
    expect(component.find('#test-id-1').length).toBe(1);
  });

  it("should render a 'details' tag", () => {
    expect(component.find('#test-id-1').dive().find('details').length).toBe(1);
  });

  it("should render one 'summary' tag as direct child of 'details' tag", () => {
    expect(
      component.find('#test-id-1').dive().find('details > summary').length
    ).toBe(1);
  });

  it('should render header text', () => {
    expect(component.find('#test-id-1').dive().find('summary').text()).toBe(
      'Test header 1'
    );
  });

  it('should render three items', () => {
    expect(component.children().length).toBe(3);
  });

  it('should show first and third items open and second item closed', () => {
    expect(component.find('#test-id-1').find('[open=true]').length).toBe(1);
    expect(component.find('#test-id-2').find('[open=false]').length).toBe(1);
    expect(component.find('#test-id-3').find('[open=true]').length).toBe(1);
  });

  it("should only allow one item to be open at any time. If multiple 'open' set then first occurence should be only item open", () => {
    component = shallow(
      <Accordion onlyOneOpen>
        <AccordionItem header="Test header 1" id="test-id-1" open>
          Test content 1
        </AccordionItem>
        <AccordionItem header="Test header 2" id="test-id-2">
          Test content 2
        </AccordionItem>
        <AccordionItem header="Test header 3" id="test-id-3" open>
          Test content 3
        </AccordionItem>
      </Accordion>
    );

    expect(component.find('#test-id-1').find('[open=true]').length).toBe(1);
    expect(component.find('#test-id-2').find('[open=false]').length).toBe(1);
    expect(component.find('#test-id-3').find('[open=false]').length).toBe(1);
  });

  it("should close all items if 'onlyOneOpen' is set", () => {
    component = shallow(
      <Accordion onlyOneOpen>
        <AccordionItem header="Test header 1" id="test-id-1" open>
          Test content 1
        </AccordionItem>
        <AccordionItem header="Test header 2" id="test-id-2">
          Test content 2
        </AccordionItem>
        <AccordionItem header="Test header 3" id="test-id-3">
          Test content 3
        </AccordionItem>
      </Accordion>
    );

    expect(component).toMatchSnapshot();

    component
      .find('#test-id-3')
      .dive()
      .find('summary')
      .simulate('click', {
        preventDefault: () => false
      });

    expect(component).toMatchSnapshot();
  });

  it('should accept callback and return open state and current item id', () => {
    const mockCallBack = jest.fn();

    component = shallow(
      <Accordion onSelect={mockCallBack}>
        <AccordionItem header="Test header 1" id="test-id-1">
          Test content 1
        </AccordionItem>
        <AccordionItem header="Test header 2" id="test-id-2">
          Test content 2
        </AccordionItem>
        <AccordionItem header="Test header 3" id="test-id-3">
          Test content 3
        </AccordionItem>
      </Accordion>
    );

    component
      .find('#test-id-1')
      .dive()
      .find('summary')
      .simulate('click', {
        preventDefault: () => false
      });

    expect(mockCallBack).toHaveBeenCalledWith(true, 'test-id-1');
  });

  it("should only render children of type 'AccordionItem'", () => {
    component = shallow(
      <Accordion>
        <AccordionItem header="Test header 1">Test content 1</AccordionItem>
        <div>Test content 2</div>
        <AccordionItem header="Test header 3">Test content 3</AccordionItem>
      </Accordion>
    );

    expect(component.children('AccordionItem').length).toBe(2);
  });
});

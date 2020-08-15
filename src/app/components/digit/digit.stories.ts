import {Meta, Story} from "@storybook/angular/types-6-0";
import {DigitComponent} from "./digit.component";

export default {
  title: 'Digit',
  component: DigitComponent,
} as Meta;

const Template: Story<DigitComponent> = (args: DigitComponent) => ({
  component: DigitComponent,
  props: args,
});

export const Standard = Template.bind({});
Standard.args = {};

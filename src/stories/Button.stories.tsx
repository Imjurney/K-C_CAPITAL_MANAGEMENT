import { Story, Meta } from '@storybook/react';
import { Button } from '@/components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button type={args.type} layOutDesign={args.layOutDesign}>
    {args.children}
  </Button>
);

export const NormalType = Template.bind({});

NormalType.args = {
  type: 'Button',
  layOutDesign: 'Normal',
  children: 'Read More',
};
export const FormType = Template.bind({});

FormType.args = {
  type: 'Button',
  layOutDesign: 'Form',
  children: 'submit',
};

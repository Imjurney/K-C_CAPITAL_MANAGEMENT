import { Story, Meta } from '@storybook/react';
import { Label } from '@/components/Label/Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story = (args) => <Label {...args} />;

export const LABEL = Template.bind({});

LABEL.args = {
  jobTitle: 'test',
};

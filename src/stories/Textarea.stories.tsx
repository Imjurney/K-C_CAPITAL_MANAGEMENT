import { Story, Meta } from '@storybook/react';
import { Textarea } from '@/components/Textarea/Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <Textarea />;

export const Primary = Template.bind({});

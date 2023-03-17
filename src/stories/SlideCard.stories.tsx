import { Story, Meta } from '@storybook/react';
import { SlideCard } from '@/components/SlideCard/SlideCard';

export default {
  title: 'Components/SlideCard',
  component: SlideCard,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <SlideCard />;

export const Primary = Template.bind({});

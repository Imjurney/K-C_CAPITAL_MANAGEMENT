import { Story, Meta } from '@storybook/react';
import { WorkerCard } from '@/components/WorkerCard/WorkerCard';

export default {
  title: 'Components/WorkerCard',
  component: WorkerCard,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <WorkerCard />;

export const Primary = Template.bind({});

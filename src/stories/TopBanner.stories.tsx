import { Story, Meta } from '@storybook/react';
import { TopBanner } from '@/components/TopBanner/TopBanner';

export default {
  title: 'Components/TopBanne',
  component: TopBanner,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <TopBanner />;

export const Primary = Template.bind({});

import { Story, Meta } from '@storybook/react';
import InvestmentArrow from '@/components/InvestmentArrow/InvestmentArrow';

export default {
  title: 'Components/InvestmentArrow',
  component: InvestmentArrow,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <InvestmentArrow />;

export const Primary = Template.bind({});

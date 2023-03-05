import { Story, Meta } from '@storybook/react';
import { Footer } from '@/components/Footer/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <Footer />;

export const Primary = Template.bind({});

import { Story, Meta } from '@storybook/react';
import { EmailInput } from '@/components/EmailInput/EmailInput';

export default {
  title: 'Components/ EmailInput',
  component: EmailInput,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <EmailInput />;

export const Email = Template.bind({});

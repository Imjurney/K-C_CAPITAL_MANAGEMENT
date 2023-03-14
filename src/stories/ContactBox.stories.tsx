import { Story, Meta } from '@storybook/react';
import { ContactBox } from '@/components/Contactbox/ContactBox';

export default {
  title: 'Components/ContactBox',
  component: ContactBox,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <ContactBox />;

export const Primary = Template.bind({});

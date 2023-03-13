import { Story, Meta } from '@storybook/react';
import ContactPage from '@/pages/Contact/Contact';

export default {
  title: 'Page/ContactPage',
  component: ContactPage,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <ContactPage />;

export const Contact = Template.bind({});

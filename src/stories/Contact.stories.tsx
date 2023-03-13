import { Story, Meta } from '@storybook/react';
import ContactPage from '@/pages/Contact/ContactPage';
import { FormspreeProvider } from '@formspree/react';
import { RecoilRoot } from 'recoil';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Page/ContactPage',
  component: ContactPage,
  argTypes: { onClick: { action: 'clicked' } },

  decorators: [
    withRouter,
    (Story) => (
      <RecoilRoot>
        <FormspreeProvider project="2159903036745448628">
          <Story />
        </FormspreeProvider>
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story = (args) => <ContactPage />;

export const Contact = Template.bind({});

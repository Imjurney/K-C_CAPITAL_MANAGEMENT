import { Story, Meta } from '@storybook/react';
import ContactPage from '@/pages/Contact/ContactPage';
import { FormspreeProvider } from '@formspree/react';
import { RecoilRoot } from 'recoil';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
export default {
  title: 'Page/ContactPage',
  component: ContactPage,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    withRouter,
    (Story) => (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <FormspreeProvider project="2159903036745448628">
            <Story />
          </FormspreeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: '/contact',
    },
  },
} as Meta;

const Template: Story = (args) => <ContactPage />;

export const Contact = Template.bind({});

import { Story, Meta } from '@storybook/react';
import AboutUsPage from '@/pages/AboutUs/AboutUsPage';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default {
  title: 'Page/AboutUsPage',
  component: AboutUsPage,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: '/about_us',
    },
  },
} as Meta;

const Template: Story = (args) => <AboutUsPage />;

export const AboutUs = Template.bind({});

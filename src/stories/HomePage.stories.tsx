import { Story, Meta } from '@storybook/react';
import HomePage from '@/pages/Home/index';

import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default {
  title: 'Page/HomePage',
  component: HomePage,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta;

const Template: Story = (args) => <HomePage />;

export const Home = Template.bind({});

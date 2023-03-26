import { Story, Meta } from '@storybook/react';
import InvestmentPage from '@/pages/Investments/InvestmentsPage';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default {
  title: 'Page/InvestmentPage',
  component: InvestmentPage,
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
      routePath: '/investments',
    },
  },
} as Meta;

const Template: Story = (args) => <InvestmentPage />;

export const Investment = Template.bind({});

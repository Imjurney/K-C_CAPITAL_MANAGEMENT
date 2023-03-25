import { Story, Meta } from '@storybook/react';
import OtherServices from '@/pages/OtherServices/OtherServicesPage';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default {
  title: 'Page/OtherServicesPage',
  component: OtherServices,
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
      routePath: '/other_services',
    },
  },
} as Meta;

const Template: Story = (args) => <OtherServices />;

export const Otherservices = Template.bind({});

import { Story, Meta } from '@storybook/react';
import { Header } from '@/components/Header/Header';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],

  // parameters: {
  //   reactRouter: {
  //     routePath: '/Home',
  //   },
  // },
} as Meta;

const Template: Story = (args) => <Header />;

export const Primary = Template.bind({});

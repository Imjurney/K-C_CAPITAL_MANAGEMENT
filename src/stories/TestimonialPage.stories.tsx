import { Story, Meta } from '@storybook/react';
import TestimonialPage from '@/pages/Testimonial/TestimonialPage';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default {
  title: 'Page/TestimonialPage',
  component: TestimonialPage,
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
      routePath: '/testimonials',
    },
  },
} as Meta;

const Template: Story = (args) => <TestimonialPage />;

export const Testimonial = Template.bind({});

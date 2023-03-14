import { Story, Meta } from '@storybook/react';
import { Footer } from '@/components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
const queryClient = new QueryClient();
export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Footer />;

export const Primary = Template.bind({});

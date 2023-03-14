import { Story, Meta } from '@storybook/react';
import { ContactBox } from '@/components/Contactbox/ContactBox';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
export default {
  title: 'Components/ContactBox',
  component: ContactBox,
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

const Template: Story = (args) => <ContactBox />;

export const Primary = Template.bind({});

import { Story, Meta } from '@storybook/react';
import { Footer } from '@/components/Footer/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot, useRecoilValue } from 'recoil';

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
  parameters: {
    mockData: [
      {
        url: '../data/footer.json',
        method: 'GET',
        status: 200,
        response: {
          data: [
            {
              subject: 'Fax',
              contents: '+64 27 3159618',
            },
            {
              subject: 'Tel',
              contents: '+64 27 2229980',
            },
            {
              subject: 'Address',
              contents: '17 HAWDON STREET, SYDENHAM CHRISTCHURCH',
              className: 'flex',
            },
          ],
        },
      },
    ],
  },
} as Meta;

const Template: Story = (args) => <Footer />;

export const Primary = Template.bind({});

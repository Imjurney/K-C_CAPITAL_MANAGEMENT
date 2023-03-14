import { Story, Meta } from '@storybook/react';
import { ContactBox } from '@/components/Contactbox/ContactBox';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Components/ContactBox',
  component: ContactBox,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story = (args) => <ContactBox />;

export const Primary = Template.bind({});

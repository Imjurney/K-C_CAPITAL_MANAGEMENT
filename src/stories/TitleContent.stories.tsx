import { Story, Meta } from '@storybook/react';
import { TitleContent } from '@/components/TitleContent/TitleContent';

export default {
  title: 'Components/TitleContent',
  component: TitleContent,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => <TitleContent content={args.content} />;

export const INVESTMENTS = Template.bind({});

INVESTMENTS.args = {
  content: 'INVESTMENTS',
};
export const TESTIMONIALS = Template.bind({});

TESTIMONIALS.args = {
  content: 'TESTIMONIALS',
};

export const ABOUT_US = Template.bind({});

ABOUT_US.args = {
  content: 'ABOUT US',
};

export const OTHER_SERVIECE = Template.bind({});

OTHER_SERVIECE.args = {
  content: 'OTHER SERVICES WE PROVIDE TO OUR INVESTORS',
};

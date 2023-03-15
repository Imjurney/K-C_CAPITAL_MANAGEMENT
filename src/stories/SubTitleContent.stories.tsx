import { Story, Meta } from '@storybook/react';
import { SubTitleContent } from '@/components/TitleContent/SubTitleContent';

export default {
  title: 'Components/SubTitleContent',
  component: SubTitleContent,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <SubTitleContent content={args.content} subContent={args.subContent} />
);

export const Primary = Template.bind({});

Primary.args = {
  content: 'experience with K&C CAPITAL MANAGEMENT',
  subContent:
    'This is a testimonials  letter from customers who grow capital with us.',
};

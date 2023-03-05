import { Story, Meta, ComponentStory } from '@storybook/react';
import { Label } from '@/components/Label/Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    textWeight: { control: { type: 'radio', options: ['normal', 'bold'] } },
  },
} as Meta;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const LABEL = Template.bind({});

LABEL.args = {
  jobTitle: 'co-worker / test',
  textWeight: 'normal',
};

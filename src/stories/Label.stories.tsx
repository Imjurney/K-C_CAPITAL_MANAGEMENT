import { Meta, ComponentStory } from '@storybook/react';
import { Label } from '@/components/Label/Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    labelTextWeight: {
      control: { type: 'radio', options: ['normal', 'bold'] },
    },
    nameTextWeight: {
      control: { type: 'radio', options: ['normal', 'bold'] },
    },
  },
} as Meta;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const CEO_label = Template.bind({});

CEO_label.args = {
  id: 'ceo_title',
  name: 'Gun Kim',
  jobTitle: 'CEO',
  anotherJobTitle: 'Founder',
  labelTextWeight: 'bold',
  nameTextWeight: 'bold',
};

export const CFO_label = Template.bind({});

CFO_label.args = {
  id: 'cfo_titile',
  name: 'Steven W. J Choi',
  jobTitle: 'CFO',
  anotherJobTitle: 'Co-Founder',
  labelTextWeight: 'normal',
  nameTextWeight: 'normal',
};

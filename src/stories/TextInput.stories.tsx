import { Story, Meta } from '@storybook/react';
import { TextInput } from '@/components/TextInput/TextInput';
import { FormspreeProvider } from '@formspree/react';
import { RecoilRoot } from 'recoil';
export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    labelName: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['horizon', 'vertical'],
      },
      table: {
        category: 'Design',
        subcategory: 'layout design',
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['email', 'tel', 'text'],
      },
      table: {
        category: 'Text',
        subcategory: 'input type',
      },
    },
  },

  decorators: [
    (Story) => (
      <RecoilRoot>
        <FormspreeProvider project="2159903036745448628">
          <Story />
        </FormspreeProvider>
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story = (args) => (
  <TextInput
    labelName={args.labelName}
    placeholder={args.placeholder}
    direction={args.direction}
    type={args.type}
  />
);

export const FirstNameInput = Template.bind({});
FirstNameInput.args = {
  type: 'text',
  labelName: 'First Name',
  placeholder: 'Your First Name',
  direction: 'vertical',
};

export const LastNameInput = Template.bind({});
LastNameInput.args = {
  type: 'text',
  labelName: 'Last Name',
  placeholder: 'Your Last Name',
  direction: 'vertical',
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  type: 'tel',
  labelName: 'Phone',
  placeholder: 'Your Phone Number',
  direction: 'horizon',
};

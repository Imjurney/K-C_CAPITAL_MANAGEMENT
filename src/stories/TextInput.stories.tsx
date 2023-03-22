import { Story, Meta } from '@storybook/react';
import { TextInput } from '@/components/TextInput/TextInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { withRouter } from 'storybook-addon-react-router-v6';

// eslint-disable-next-line storybook/story-exports
const queryClient = new QueryClient();
export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    onValid: action('onValid'),
    onReset: action('onReset'),
    onInvalid: action('onInvalid'),
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
    withRouter,
    (Story) => {
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>;
    },
  ],
  parameters: {
    reactRouter: {
      routePath: '/contact',
    },
  },
} as Meta;

const Template: Story = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
      >
        <TextInput
          labelName={args.labelName}
          placeholder={args.placeholder}
          direction={args.direction}
          // type={args.type}
          name={'test'}
        />
      </form>
    </FormProvider>
  );
};

export const FirstNameInput = Template.bind({});
FirstNameInput.args = {
  // type: 'text',
  labelName: 'First Name',
  placeholder: 'Your First Name',
  direction: 'vertical',
};

export const LastNameInput = Template.bind({});
LastNameInput.args = {
  // type: 'text',
  labelName: 'Last Name',
  placeholder: 'Your Last Name',
  direction: 'vertical',
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  // type: 'tel',
  labelName: 'Phone',
  placeholder: 'Your Phone Number',
  direction: 'horizon',
};

import { Story, Meta } from '@storybook/react';
import { TextInput } from '@/components/TextInput/TextInput';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { action } from '@storybook/addon-actions';
import {
  useForm,
  FormProvider,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { withRouter } from 'storybook-addon-react-router-v6';

const queryClient = new QueryClient();
// eslint-disable-next-line react-hooks/rules-of-hooks
const methods = useForm();
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
    (Story) => (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
        >
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </form>
      </FormProvider>
    ),
  ],
  parameters: {
    reactRouter: {
      routePath: '/contact',
    },
  },
} as Meta;

const Template: Story = (args) => (
  <TextInput
    labelName={args.labelName}
    placeholder={args.placeholder}
    direction={args.direction}
    type={args.type}
    register={function <TFieldName extends string = string>(
      name: TFieldName,
      options?: RegisterOptions<FieldValues, TFieldName> | undefined
    ): UseFormRegisterReturn<TFieldName> {
      throw new Error('Function not implemented.');
    }}
    name={''}
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

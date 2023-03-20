import { Story, Meta } from '@storybook/react';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { action } from '@storybook/addon-actions';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { withRouter } from 'storybook-addon-react-router-v6';

const queryClient = new QueryClient();
// eslint-disable-next-line react-hooks/rules-of-hooks
const methods = useForm();
export default {
  title: 'Components/ EmailInput',
  component: EmailInput,
  argTypes: {
    onValid: action('onValid'),
    onReset: action('onReset'),
    onInvalid: action('onInvalid'),
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
  <EmailInput
    register={function <TFieldName extends string = string>(
      name: TFieldName,
      options?: RegisterOptions<FieldValues, TFieldName> | undefined
    ): UseFormRegisterReturn<TFieldName> {
      throw new Error('Function not implemented.');
    }}
  />
);

export const Email = Template.bind({});

import { Story, Meta } from '@storybook/react';
import { Textarea } from '@/components/Textarea/Textarea';
import { action } from '@storybook/addon-actions';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useForm, FormProvider } from 'react-hook-form';
import { withRouter } from 'storybook-addon-react-router-v6';

const queryClient = new QueryClient();
// eslint-disable-next-line react-hooks/rules-of-hooks
const methods = useForm();
export default {
  title: 'Components/Textarea',
  component: Textarea,
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

const Template: Story = (args) => <Textarea name={'messege'} />;

export const Primary = Template.bind({});

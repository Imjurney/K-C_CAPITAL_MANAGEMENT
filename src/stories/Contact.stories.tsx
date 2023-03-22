import { Story, Meta } from '@storybook/react';
import ContactPage from '@/pages/Contact/ContactPage';
import { action } from '@storybook/addon-actions';
import { FormProvider, useForm } from 'react-hook-form';
import { withRouter } from 'storybook-addon-react-router-v6';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line react-hooks/rules-of-hooks
const queryClient = new QueryClient();
// eslint-disable-next-line react-hooks/rules-of-hooks

export default {
  title: 'Page/ContactPage',
  component: ContactPage,
  argTypes: {
    onValid: action('onValid'),
    onReset: action('onReset'),
    onInvalid: action('onInvalid'),
  },
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
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
        <ContactPage />
      </form>
    </FormProvider>
  );
};

export const Contact = Template.bind({});

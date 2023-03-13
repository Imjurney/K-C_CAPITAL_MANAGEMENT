import { Story, Meta } from '@storybook/react';
import { Header } from '@/components/Header/Header';
import { withRouter } from 'storybook-addon-react-router-v6';
export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [withRouter],
  // parameters: {
  //   reactRouter: {
  //     routePath: '/Home',
  //   },
  // },
} as Meta;

const Template: Story = (args) => <Header />;

export const Primary = Template.bind({});

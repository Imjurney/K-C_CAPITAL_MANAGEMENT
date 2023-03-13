import { Story, Meta } from '@storybook/react';
import { Header } from '@/components/Header/Header';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Header />;

export const Primary = Template.bind({});

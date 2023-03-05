import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { PageTest } from './PageTest';

export default {
  title: 'Example/PageTest',
  component: PageTest,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTest>;

const Template: ComponentStory<typeof PageTest> = (args) => (
  <PageTest {...args} />
);

export const LoggedOuts = Template.bind({});

export const LoggedIns = Template.bind({});

LoggedIns.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};

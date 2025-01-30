import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'primary',
          'secondary',
          'outline',
          'ghost',
          'link',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'icon'],
      },
    },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'md',
  loading: false,
  fullWidth: false,
};

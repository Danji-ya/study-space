import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'components|basic/Button', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Small = Template.bind({});
Small.args = {
  children: '버튼',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  children: '버튼',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  children: '버튼',
  size: 'lg',
};

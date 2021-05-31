import { Story, Meta } from '@storybook/react/types-6-0'
import Btn from '.'

export default {
  title: 'Btn',
  component: Btn
} as Meta

export const Default: Story = args => <Btn {...args} />

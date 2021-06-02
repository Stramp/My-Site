import { Story, Meta } from '@storybook/react/types-6-0'
import Instagram from '.'

export default {
  title: 'Instagram',
  component: Instagram
} as Meta

export const Default: Story = args => <Instagram {...args} />

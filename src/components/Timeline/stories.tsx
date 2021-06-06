import { Story, Meta } from '@storybook/react/types-6-0'
import Timeline from '.'

export default {
  title: 'Timeline',
  component: Timeline
} as Meta

export const Default: Story = args => <Timeline {...args} />

import { Story, Meta } from '@storybook/react/types-6-0'
import Github from '.'

export default {
  title: 'Github',
  component: Github
} as Meta

export const Default: Story = args => <Github {...args} />

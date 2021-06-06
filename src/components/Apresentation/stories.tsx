import { Story, Meta } from '@storybook/react/types-6-0'
import Apresentation from '.'

export default {
  title: 'Apresentation',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  component: Apresentation
} as Meta

export const Default: Story = args => <Apresentation {...args} />

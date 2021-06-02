import { Story, Meta } from '@storybook/react/types-6-0'
import HomeIco from '.'

export default {
  title: 'HomeIco',
  component: HomeIco
} as Meta

export const Default: Story = args => <HomeIco {...args} />

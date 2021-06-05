import { Story, Meta } from '@storybook/react/types-6-0'
import BgSlider from '.'

export default {
  title: 'BgSlider',
  component: BgSlider
} as Meta

export const Default: Story = args => <BgSlider {...args} />

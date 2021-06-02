import { Story, Meta } from '@storybook/react/types-6-0'
import PortifolioIco from '.'

export default {
  title: 'PortifolioIco',
  component: PortifolioIco
} as Meta

export const Default: Story = args => <PortifolioIco {...args} />

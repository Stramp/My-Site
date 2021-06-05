import { Story, Meta } from '@storybook/react/types-6-0'
import SiteConfig from '.'

export default {
  title: 'SiteConfig',
  component: SiteConfig
} as Meta

export const Default: Story = args => <SiteConfig {...args} />

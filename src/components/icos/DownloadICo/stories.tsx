import { Story, Meta } from '@storybook/react/types-6-0'
import DownloadICo from '.'

export default {
  title: 'DownloadICo',
  component: DownloadICo
} as Meta

export const Default: Story = args => <DownloadICo {...args} />

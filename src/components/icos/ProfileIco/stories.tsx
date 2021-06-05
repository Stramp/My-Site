import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileIco from '.'

export default {
  title: 'ProfileIco',
  component: ProfileIco
} as Meta

export const Default: Story = args => <ProfileIco {...args} />

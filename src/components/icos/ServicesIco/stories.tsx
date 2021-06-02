import { Story, Meta } from '@storybook/react/types-6-0'
import ServicesIco from '.'

export default {
  title: 'ServicesIco',
  component: ServicesIco
} as Meta

export const Default: Story = args => <ServicesIco {...args} />

import { Story, Meta } from '@storybook/react/types-6-0'
import Whatsapp from '.'

export default {
  title: 'Whatsapp',
  component: Whatsapp
} as Meta

export const Default: Story = args => <Whatsapp {...args} />

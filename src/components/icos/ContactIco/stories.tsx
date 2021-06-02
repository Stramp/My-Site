import { Story, Meta } from '@storybook/react/types-6-0'
import ContactIco from '.'

export default {
  title: 'ContactIco',
  component: ContactIco
} as Meta

export const Default: Story = args => <ContactIco {...args} />

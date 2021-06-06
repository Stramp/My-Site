import { Story, Meta } from '@storybook/react/types-6-0'
import TitleSection from '.'

export default {
  title: 'TitleSection',
  component: TitleSection
} as Meta

export const Default: Story = args => <TitleSection {...args} />

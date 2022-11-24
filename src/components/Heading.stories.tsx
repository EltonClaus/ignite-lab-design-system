import { Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum.',
     size: 'md',
  },  
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
      size: 'sm'
    }
}

export const CustomComponents: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Headin with h1</h1>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}
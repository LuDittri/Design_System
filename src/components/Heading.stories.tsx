import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default{
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type:'inline-radio',
            }
        }
    }
}as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size:'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size:'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading is H1</h1>
        )
    },
    argTypes: { //VERIFICAR POR QUE ESTÁ ERRADO 51:40 MIN
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}
import {Meta, StoryObj} from "@storybook/react";
import Button, { EButtonStyled } from "./button.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const buttonStyles = Object.keys(EButtonStyled)
const meta = {
    title: "Button/Button",
    component: Button,
    parameters: {},
    argTypes: {
        disable: { control: 'boolean' },
        onClick: { action: 'clicked' },
        buttonstyle: {
            control: { type: 'select' },
            options: buttonStyles,
        }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    name: "Default",
    args: {
        children: "Primary",
        disable: false,
        buttonstyle: EButtonStyled.Primary.valueOf()
    }
};

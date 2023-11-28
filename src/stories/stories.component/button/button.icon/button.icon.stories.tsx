import {Meta, StoryObj} from "@storybook/react";
import ButtonIcon, {IButtonIcon} from "./button.icon.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"

const meta = {
    title: "Button/ButtonIcon",
    component: ButtonIcon,
    parameters: {},
    argTypes: {
        onClick: { action: 'clicked' },
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof ButtonIcon>;

export default meta;


export const ButtonIconStory: StoryObj<IButtonIcon> = {
    name: "Default",
    args: {
        icon: faAngleLeft
    }
};

import {Meta, StoryObj} from "@storybook/react";
import NavigationGroup from "./navigation.group.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Button/NavigationGroup",
    component: NavigationGroup,
    argTypes: {
        menus: { control: "array" }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof NavigationGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationGroupStory: Story = {
    name: "Default",
    args: {
        menus: [
            {
                title: "Content",
                to: ""
            },
            {
                title: "Assignments",
                to: ""
            },
            {
                title: "Classmates",
                to: ""
            }
            ]
    }
};

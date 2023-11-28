import {Meta, StoryObj} from "@storybook/react";
import Checkbox from "./checkbox.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Input/Checkbox",
    component: Checkbox,
    tags: ['auto-docs'],
    argTypes: {
        onChecked: { control: 'boolean' },
        onCheckedChange: { action: 'clicked' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
    name: "Default",
    args: {
        onChecked: false
    }
};

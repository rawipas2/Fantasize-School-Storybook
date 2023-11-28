import {Meta, StoryObj} from "@storybook/react";
import ProgressRing from "./progress.ring.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Progress/ProgressRing",
    component: ProgressRing,
    argTypes: {
        percent: { control: 'number'},
        background: { control: 'text'}
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof ProgressRing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RingStory: Story = {
    name: "Default",
    args: {
        percent: 1,
        background: "#ffffff"
    }
};

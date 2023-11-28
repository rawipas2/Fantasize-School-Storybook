import {Meta, StoryObj} from "@storybook/react";
import UploadFile from "./upload.file";
import StorybookWrapper from "src/stories/storybook.wrapper";

const meta = {
    title: "Input/UploadFile",
    component: UploadFile,
    argTypes: {},
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof UploadFile>

export default meta

type Story = StoryObj<typeof meta>;

export const UploadFileStory: Story = {
    name: "Default",
    args: {}
}
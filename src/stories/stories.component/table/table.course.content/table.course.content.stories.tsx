import {Meta, StoryObj} from "@storybook/react";
import TableCourseContent from "./table.course.content.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "Table/TableCourseContent",
    component: TableCourseContent,
    argTypes: {
        onSelectAll: { control: 'boolean' },
        isCheckbox: { control: 'boolean' },
        title1: { control: 'text' },
        title2: { control: 'text' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TableCourseContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableCourseStory: Story = {
    name: "Default",
    args: {
        onSelectAll: false,
        isCheckbox: true,
        children: <></>,
        title1: "Name",
        title2: "Date"
    }
};

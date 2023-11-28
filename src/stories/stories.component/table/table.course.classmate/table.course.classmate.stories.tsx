import {Meta, StoryObj} from "@storybook/react";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";
import TableCourseClassMate from "./table.course.classmate.tsx";

const meta = {
    title: "Table/TableCourseClassMate",
    component: TableCourseClassMate,
    argTypes: {},
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TableCourseClassMate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableCourseStory: Story = {
    name: "Default",
    args: {}
};

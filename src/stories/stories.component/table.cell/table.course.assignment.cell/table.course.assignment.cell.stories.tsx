import {Meta, StoryObj} from "@storybook/react";
import TableCourseAssignmentCell from "./table.course.assignment.cell.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "TableCell/TableCourseAssignmentCell",
    component: TableCourseAssignmentCell,
    argTypes: {
        name: { control: "text" },
        dueDate: { control: "date" },
        assignmentId: { control: "number" },
        onClick: { action: "clicked" },
        submitted: { control: "boolean" },
        submitDate: { control: "date" }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TableCourseAssignmentCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableCourseAssignmentCellStory: Story = {
    name: "Default",
    args: {
        name: "HomeWork 1",
        dueDate: new Date(),
        assignmentId: 0,
        submitted: true,
        submitDate: new Date()
    }
};

import {Meta, StoryObj} from "@storybook/react";
import TableCourseClassmatesCell from "./table.course.classmates.cell.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";

const meta = {
    title: "TableCell/TableCourseClassmatesCell",
    component: TableCourseClassmatesCell,
    argTypes: {
        index: { control: "number" },
        userName: { control: "text" },
        userId: { control: "number" },
        onClick: { action: "clicked" }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TableCourseClassmatesCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableCourseClassmatesCellStory: Story = {
    name: "Default",
    args: {
        index: 1,
        userName: "Rawipas Samoondee",
        userId: 1
    }
};

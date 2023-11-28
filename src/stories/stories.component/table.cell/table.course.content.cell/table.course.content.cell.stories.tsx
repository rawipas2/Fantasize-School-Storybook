import {Meta, StoryObj} from "@storybook/react";
import TableCourseContentCell from "./table.course.content.cell.tsx";
import {ECourseContentData} from "./table.course.content.cell.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import {BrowserRouter} from "react-router-dom";

const tableCourseContent = Object.keys(ECourseContentData)
const meta = {
    title: "TableCell/TableCourseContentCell",
    component: TableCourseContentCell,
    argTypes: {
        name: { control: 'text' },
        uploadDate: { control: 'date' },
        type: {
            control: 'select',
            options: tableCourseContent
        },
        selected: { control: 'boolean' },
        index: { control: 'number' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TableCourseContentCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TableCourseCellStory: Story = {
    name: "Default",
    args: {
        name: "lab01.docx",
        uploadDate: new Date(),
        type: ECourseContentData.word,
        selected: false,
        index: 1
    }
};

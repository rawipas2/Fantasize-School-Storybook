import {Meta, StoryObj} from "@storybook/react";
import CardAssignment from "./card.assignment.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Card/CardAssignment",
    component: CardAssignment,
    argTypes: {
        assignmentName: { control: 'text' },
        courseName: { control: 'text' },
        dueDate: { control: 'date' },
        point: { control: 'number'}
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof CardAssignment>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardAssignmentStory: Story = {
    name: "Default",
    args: {
        assignmentName: "Assignment Name",
        courseName: "Course Name",
        dueDate: new Date(),
        point: 10
    }
};

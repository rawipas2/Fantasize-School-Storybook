import {Meta, StoryObj} from "@storybook/react";
import CardCourse from "./card.course.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Card/CardCourse",
    component: CardCourse,
    argTypes: {
        courseName: { control: 'text' },
        startTime: { control: 'date' },
        endTime: { control: 'date' },
        building: { control: 'text' },
        courseId: { control: 'number' },
        onClick: { action: 'clicked' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof CardCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardCourseStory: Story = {
    name: "Default",
    args: {
        courseName: "COURSE NAME",
        startTime: new Date(),
        endTime: new Date(new Date().getTime() + 3600000),
        building: "Building",
        courseId: 1,
    }
};

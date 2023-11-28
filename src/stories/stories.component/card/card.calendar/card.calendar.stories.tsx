import {Meta, StoryObj} from "@storybook/react";
import CardCalendar from "./card.calendar.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Card/CardCalendar",
    component: CardCalendar,
    argTypes: {
        startTime: { control: 'date' },
        endTime: { control: 'date' },
        courseName: { control: 'text' },
        building: { control: 'text' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof CardCalendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Story: Story = {
    name: "Default",
    args: {
        startTime: new Date(),
        endTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        courseName: "Course Name",
        building: "Building"
    }
};

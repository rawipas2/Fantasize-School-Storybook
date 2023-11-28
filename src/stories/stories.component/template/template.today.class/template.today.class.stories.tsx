import {Meta, StoryObj} from "@storybook/react";
import StorybookWrapper from "src/stories/storybook.wrapper";
import TemplateTodayClass from "./template.today.class";
import CardCalendar from "@stories/card/card.calendar/card.calendar";


const meta = {
    title: "Template/TemplateTodayClass",
    component: TemplateTodayClass,
    argTypes: {
        title: { control: 'text' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TemplateTodayClass>

export default meta
type Story = StoryObj<typeof meta>

export const TemplateTodayClassStory: Story = {
    name: "Default",
    args: {
        title: "Today’s Class",
        children: <CardCalendar 
            building="Building"
            courseName="CourseName"
            endTime={new Date()}
            startTime={new Date()}
        />
    }
}
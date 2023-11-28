import {Meta, StoryObj} from "@storybook/react";
import StorybookWrapper from "src/stories/storybook.wrapper";
import TemplateDashboard, { ITemplateDashboardContent } from "./template.dashboard";
import CardAssignment from "@stories/card/card.assignment/card.assignment";

const meta = {
    title: "Template/TemplateDashboard",
    component: TemplateDashboard,
    argTypes: {
        contents: { control: "array"}
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TemplateDashboard>

export default meta
type Story = StoryObj<typeof meta>

export const TemplateDashboardStory: Story = {
    name: "Default",
    args: {
        contents: [
            {
                contentTitle: "Assignment due in soon",
                children: <div>
                    <CardAssignment 
                        assignmentName="Home Work (1)" 
                        courseName="Computer Science 1" 
                        dueDate={new Date()}
                        point={10} 
                    />
                    <CardAssignment 
                        assignmentName="Home Work (2)" 
                        courseName="Computer Science 1" 
                        dueDate={new Date()} 
                        point={90} 
                    />
                </div>,
                columns: ""
            } as ITemplateDashboardContent
        ]
    }
}
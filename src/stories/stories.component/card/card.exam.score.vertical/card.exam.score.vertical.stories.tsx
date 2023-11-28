import {Meta, StoryObj} from "@storybook/react";
import CardExamScoreVertical from "./card.exam.score.vertical.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Card/CardExamScoreVertical",
    component: CardExamScoreVertical,
    argTypes: {
        percent: { control: 'number' },
        courseName: { control: 'text' },
        onClick: { action: 'clicked'}
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof CardExamScoreVertical>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExamScoreVerticalStory: Story = {
    name: "Default",
    args: {
        percent: 10,
        courseName: "Course Name"
    }
};

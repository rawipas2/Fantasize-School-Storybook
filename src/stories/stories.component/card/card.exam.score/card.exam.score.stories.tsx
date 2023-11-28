import {Meta, StoryObj} from "@storybook/react";
import CardExamScore from "./card.exam.score.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Card/CardExamScore",
    component: CardExamScore,
    argTypes: {
        courseName: { control: 'text' },
        details: { control: 'text' },
        percent: { control: 'number' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof CardExamScore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExamScoreStory: Story = {
    name: "Default",
    args: {
        courseName: "COURSE NAME",
        details: "DETAILS",
        percent: 20
    }
};

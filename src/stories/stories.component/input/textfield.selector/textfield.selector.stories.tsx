import {Meta, StoryObj} from "@storybook/react";
import TextfieldSelector from "./textfield.selector.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

const meta = {
    title: "Input/TextfieldSelector",
    component: TextfieldSelector,
    parameters: {},
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        selects: { control: 'array'},
        disable: { control: 'boolean' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof TextfieldSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextfieldSelectorStory: Story = {
    name: "Default",
    args: {
        placeholder: "School Name",
        value: "",
        selects: ["Fantasize School", "Fantasize University"],
        disable: false,
        lange: "EN"
    }
};

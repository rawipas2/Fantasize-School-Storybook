import {Meta, StoryObj} from "@storybook/react";
import ButtonGroup, {IButtonGroupBody} from "./button.group.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";

import { faSchool, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"

const meta = {
    title: "Button/ButtonGroup",
    component: ButtonGroup,
    parameters: {},
    tags: ['auto-docs'],
    argTypes: {
        bodys: { control: 'array' },
        group: { control: 'object' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultGroupSchool: IButtonGroupBody = {
    icon: faSchool,
    label: "School"
}

const defaultGroupUniversity: IButtonGroupBody = {
    icon: faBuildingColumns,
    label: "University"
}

export const ButtonGroupStory: Story = {
    name: "Default",
    args: {
        bodys: [defaultGroupSchool, defaultGroupUniversity],
        group: defaultGroupSchool
    }
};

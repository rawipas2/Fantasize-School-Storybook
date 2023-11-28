import {Meta, StoryObj} from "@storybook/react";
import Textfield, {ETextfieldLang} from "./textfield.tsx";
import type {ITextfield} from "./textfield.tsx"
import StorybookWrapper from "../../../storybook.wrapper.tsx";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const textFieldLang = Object.keys(ETextfieldLang)
const meta = {
    title: "Input/Textfield",
    component: Textfield,
    parameters: {},
    tags: ['auto-docs'],
    argTypes: {
        placeholder: { control: 'text' },
        value: { control: 'text' },
        disable: { control: 'boolean' },
        lange: {
            control: 'select',
            options: textFieldLang
        }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof Textfield>;

export default meta;


export const TextfieldStory: StoryObj<ITextfield> = {
    name: "Default",
    args: {
        placeholder: "First Name (Thai)",
        value: "",
        disable: false,
        lange: "TH"
    }
};

export const TextfieldIconStory: StoryObj<ITextfield> = {
    name: "Icon",
    args: {
        icon: faEnvelope,
        placeholder: "Email",
        value: "",
        disable: false,
        lange: "EN"
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
};

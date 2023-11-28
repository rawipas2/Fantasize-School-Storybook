import {Meta} from "@storybook/react";
import NavigationItem, {INavigationItem} from "./navigation.item.tsx";
import StorybookWrapper from "../../../storybook.wrapper.tsx";
import { BrowserRouter } from 'react-router-dom';
import {faChalkboardUser} from "@fortawesome/free-solid-svg-icons"

const meta = {
    title: "Button/NavigationItem",
    component: NavigationItem,
    parameters: {},
    tags: ["auto-docs"],
    argTypes: {
        to : { control: "text" },
        icon: { control: 'object' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        </StorybookWrapper>
    )]
} satisfies Meta<typeof NavigationItem>;

export default meta;

const defaultArgs : INavigationItem = {
    to: "",
    icon: faChalkboardUser,
    children: "Courses"
}
export const NavigationItemStory: {
    args: INavigationItem;
    name: string
} = {
    name: "Default",
    args: defaultArgs
};

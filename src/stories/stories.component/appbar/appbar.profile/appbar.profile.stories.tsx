import {Meta, StoryObj} from "@storybook/react";
import StorybookWrapper from "src/stories/storybook.wrapper";
import AppbarProfile, { IAppbarProfileMenu } from "./appbar.profile";
import {faUser} from "@fortawesome/free-solid-svg-icons"

const meta = {
    title: "Appbar/AppbarProfile",
    component: AppbarProfile,
    tags: ['auto-docs'],
    argTypes: {
        src: { control: 'text' },
        profileName: { control: 'text' },
        profileDescription: { control: 'text' },
        menus: { control: 'array' },
        onClickLogout: { action: 'clicked' }
    },
    decorators: [(Story) => (
        <StorybookWrapper>
            <Story />
        </StorybookWrapper>
    )]
} satisfies Meta<typeof AppbarProfile>

export default meta
type Story = StoryObj<typeof meta>


export const AppbarProfileStory: Story = {
    name: "Default",
    args: {
        src: "https://fantasize-technology.com/assets/fantasize.website.logo-d730914a.svg",
        profileName: "Fantasize School",
        profileDescription: "Fantasize Admin",
        menus: [
            {
                icon: faUser,
                label: "User",
                onClick: () => {}
            } as unknown as IAppbarProfileMenu
        ]
    } 
}
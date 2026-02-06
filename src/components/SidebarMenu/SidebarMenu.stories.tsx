import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "./SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/Sidebar",
  component: SidebarMenu
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

const items = [
  { label: "Home" },
  { label: "Search" },
  {
    label: "Subjects",
    subItems: [
      { label: "Math" },
      {
        label: "Science",
        subItems: [
          { label: "Physics" },
          { label: "Chemistry" },
          { label: "Biology" }
        ]
      }
    ]
  },
  { label: "Notification" }
];

export const Open: Story = { args: { items, defaultOpen: true } };
export const Closed: Story = { args: { items, defaultOpen: false } };

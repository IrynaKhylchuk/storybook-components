import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: { content: "Some information.", type: "info", duration: 3000 }
};
export const Success: Story = {
  args: { content: "Success!", type: "success", duration: 3000 }
};
export const ErrorToast: Story = {
  args: { content: "Error occurred.", type: "danger", duration: 3000 }
};

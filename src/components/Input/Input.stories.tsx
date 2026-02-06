import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: { type: "text", clearable: false, placeholder: "Placeholder" }
};
export const TextClearable: Story = {
  args: { type: "text", clearable: true, placeholder: "Placeholder" }
};
export const Password: Story = {
  args: { type: "password", clearable: false, placeholder: "Placeholder" }
};
export const PasswordClearable: Story = {
  args: { type: "password", clearable: true, placeholder: "Placeholder" }
};
export const NumberInput: Story = {
  args: { type: "number", clearable: false, placeholder: "Placeholder" }
};
export const NumberInputClearable: Story = {
  args: { type: "number", clearable: true, placeholder: "Placeholder" }
};

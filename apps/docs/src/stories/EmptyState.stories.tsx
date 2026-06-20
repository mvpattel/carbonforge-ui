import type { Meta, StoryObj } from "@storybook/react";
import { DocumentBlank } from "@carbon/icons-react";
import { EmptyState } from "@carbonforge/ui";

const meta = {
  title: "Patterns/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof EmptyState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoAnalyses: Story = {
  args: {
    title: "No analyses yet",
    description:
      "Upload a requirements document to generate stories, acceptance criteria, risks, and test ideas.",
    icon: <DocumentBlank size={48} />,
    actions: [
      {
        label: "Upload document",
        onClick: () => undefined
      },
      {
        label: "Use sample data",
        kind: "secondary",
        onClick: () => undefined
      }
    ]
  }
};

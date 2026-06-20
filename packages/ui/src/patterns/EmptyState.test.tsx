import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders an accessible title and description", () => {
    render(
      <EmptyState
        title="No workflows found"
        description="Create a workflow or adjust filters to continue."
      />,
    );

    expect(screen.getByRole("heading", { name: "No workflows found" })).toBeInTheDocument();
    expect(screen.getByText("Create a workflow or adjust filters to continue.")).toBeInTheDocument();
  });
});

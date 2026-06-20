"use client";

import { DocumentBlank } from "@carbon/icons-react";
import { EmptyState } from "@carbonforge/ui";

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem", display: "grid", placeItems: "center" }}>
      <EmptyState
        title="CarbonForge UI"
        description="A focused Carbon-based pattern library. EmptyState is the first component and the template for future patterns."
        icon={<DocumentBlank size={48} />}
        actions={[
          {
            label: "View Storybook",
            onClick: () => undefined
          }
        ]}
      />
    </main>
  );
}

# CarbonForge UI

CarbonForge UI is an enterprise React pattern library built on top of IBM Carbon Design System.

It is designed for data-heavy, workflow-heavy, AI-assisted business applications where teams need more than individual components. The goal is to provide reusable product patterns for dashboards, review queues, audit trails, filter panels, form workflows, and explainable AI outputs.

## Why This Exists

Enterprise frontend teams often repeat the same product patterns across internal tools:

- Page headers with breadcrumbs, tags, and actions
- Advanced filter panels
- Empty, loading, error, and permission states
- Audit timelines
- KPI cards
- AI output review panels
- Data-heavy dashboard shells
- Multi-step forms and review workflows

CarbonForge UI packages these patterns in a typed, accessible, documented, Carbon-native way.

## Flagship Portfolio Role

This is one of the three flagship projects in my senior frontend portfolio.

It demonstrates:

- React component API design
- TypeScript-first package architecture
- IBM Carbon Design System expertise
- Enterprise UX patterns
- Accessibility-focused engineering
- Storybook documentation
- Testing and CI/CD setup
- Open-source maintainability

## Current Component

- `EmptyState`

`EmptyState` is intentionally the only component right now. The project starts small so the architecture, documentation, testing, and release workflow stay easy to understand before the library grows.

## Tech Stack

- React
- TypeScript
- IBM Carbon Design System
- SCSS
- Storybook
- Vitest
- Testing Library
- tsup
- GitHub Actions
- Next.js example app

## Repository Structure

```text
carbonforge-ui/
  apps/
    docs/             Storybook documentation
    examples-next/    Next.js example app
  packages/
    ui/               Published component and pattern package
  docs/
    accessibility.md
    design-principles.md
    roadmap.md
  .github/
    workflows/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Run the Next.js example:

```bash
npm run dev -w @carbonforge/examples-next
```

Validate the workspace:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Package Usage

```tsx
import { EmptyState } from "@carbonforge/ui";
import "@carbon/react/index.scss";
import "@carbonforge/ui/styles.css";

export function NoRecords() {
  return (
    <EmptyState
      title="No records found"
      description="Create a record or adjust your filters to continue."
      actions={[
        {
          label: "Create record",
          onClick: () => undefined
        }
      ]}
    />
  );
}
```

## Quality Standards

Every pattern should include:

- Typed public API
- Storybook story
- Keyboard-accessible behavior
- Responsive layout
- Loading, empty, error, or review-state guidance where relevant
- Unit or interaction tests
- Accessibility notes when the pattern has non-trivial behavior

## Documentation

- [Design principles](./docs/design-principles.md)
- [Accessibility strategy](./docs/accessibility.md)
- [Roadmap](./docs/roadmap.md)
- [Contributing](./docs/contributing.md)

## License

MIT

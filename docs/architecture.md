# Architecture

CarbonForge UI is organized as a small npm workspace.

## Workspace Shape

```text
apps/docs
apps/examples-next
packages/ui
```

## Package Responsibilities

### `packages/ui`

The reusable React package. It owns:

- Pattern components.
- Hooks.
- SCSS styles.
- Unit tests.
- Public exports.

### `apps/docs`

Storybook documentation. It owns:

- Pattern examples.
- Accessibility addon checks.
- API documentation.
- Visual review during development.

### `apps/examples-next`

Next.js integration example. It proves:

- The package works inside a real app.
- Carbon styles and CarbonForge styles compose correctly.
- Patterns are useful in product-like pages.

## Styling Strategy

CarbonForge uses SCSS and the `cfg-` class prefix. Components do not import their own SCSS files directly. Consumers import the package stylesheet once:

```tsx
import "@carbonforge/ui/styles.css";
```

During local workspace development, Storybook and the example app import the source SCSS directly.

## Public API Strategy

Only export stable patterns from `packages/ui/src/index.ts`.

Internal helpers should remain unexported until they prove reusable across at least two patterns.

## Current Scope

The library currently exports only `EmptyState`. Future components should follow the same file shape:

```text
packages/ui/src/patterns/ComponentName.tsx
packages/ui/src/patterns/ComponentName.scss
packages/ui/src/patterns/ComponentName.test.tsx
apps/docs/src/stories/ComponentName.stories.tsx
```

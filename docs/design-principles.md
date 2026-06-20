# Design Principles

CarbonForge UI extends Carbon with enterprise product patterns. It should not replace Carbon or create a competing visual language.

The project currently starts with one simple component, `EmptyState`, so the architecture can stay clear before more patterns are added.

## Principles

### 1. Carbon First

Use Carbon primitives wherever they fit. CarbonForge should compose Carbon components into repeatable product patterns instead of restyling everything from scratch.

### 2. Patterns Over Decoration

Every component should solve a real enterprise product need:

- Review work
- Filter records
- Explain AI output
- Show audit history
- Summarize operational metrics
- Guide complex workflows

Avoid decorative components that do not improve a product workflow.

### 3. Accessible By Default

Patterns should support keyboard navigation, visible focus states, semantic structure, screen reader labels, and responsive behavior.

WCAG 2.2 AA is the target for practical implementation.

### 4. Data-Heavy Interfaces

Enterprise users scan, compare, filter, approve, and investigate. Layouts should be calm, dense enough for work, and predictable.

### 5. AI Must Be Reviewable

AI output should show confidence, risk, status, and source excerpts when used in business workflows. Users should understand what was generated and what still needs review.

### 6. Typed APIs

Component APIs should be explicit and TypeScript-friendly. Avoid loosely typed escape hatches unless there is a clear extension need.

### 7. Composition Before Configuration

Use configuration for common variants, but allow composition when consumers need to provide custom content.

## Anti-Goals

- Replacing Carbon components.
- Creating a marketing-style UI kit.
- Building one-off page designs that cannot be reused.
- Hiding important AI uncertainty from users.
- Adding complex abstractions without product value.

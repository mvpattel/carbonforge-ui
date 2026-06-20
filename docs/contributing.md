# Contributing

CarbonForge UI is currently a personal flagship portfolio project. Contributions may open later after the API stabilizes.

## Local Development

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Run validation:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Component Checklist

Before adding a pattern:

- Confirm the pattern solves a repeatable enterprise product problem.
- Prefer Carbon components over custom primitives.
- Define a typed public API.
- Add Storybook stories.
- Add tests for meaningful behavior.
- Add accessibility notes when needed.
- Keep styling scoped with the `cfg-` prefix.

## Commit Style

Use clear, conventional messages:

```text
Add audit timeline pattern
Improve AI review panel accessibility
Document filter shell usage
```

## Review Focus

Review should prioritize:

- Accessibility regressions.
- API clarity.
- Overly rigid composition.
- Styling that fights Carbon.
- Patterns that are too app-specific.


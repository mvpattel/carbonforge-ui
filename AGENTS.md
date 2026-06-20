# AGENTS.md

## Project Role

CarbonForge UI is a flagship portfolio project: an enterprise React pattern library built on IBM Carbon Design System.

## Git

This project lives under `/Users/mitul/Documents/Codex`, so commits should use the personal Git identity configured for this workspace:

- Name: `mvpattel`
- Email: `mvpattel@gmail.com`

Do not change global Git identity.

## Engineering Standards

- Prefer Carbon primitives before custom UI.
- Keep components typed and composition-friendly.
- Use the `cfg-` CSS class prefix for CarbonForge styles.
- Target WCAG 2.2 AA for practical accessibility.
- Add Storybook coverage for every public pattern.
- Add tests for meaningful behavior, not implementation details.
- Keep docs current with code changes.

## Verification

Before finishing implementation work, run the relevant checks when dependencies are installed:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

If dependencies are not installed, state that clearly and avoid pretending the project was fully verified.


# Accessibility Strategy

CarbonForge UI targets practical WCAG 2.2 AA alignment for enterprise React applications.

## Baseline Expectations

Every pattern should provide:

- Semantic HTML structure.
- Keyboard-operable controls.
- Visible focus states inherited from Carbon or explicitly supported.
- Useful accessible names and labels.
- Responsive layout without content overlap.
- No color-only meaning.
- Clear empty, error, and disabled states.

## WCAG 2.2 Areas To Watch

CarbonForge patterns should pay special attention to:

- Focus not obscured.
- Target size.
- Dragging alternatives for workflows and builders.
- Consistent help.
- Redundant entry in multi-step forms.
- Accessible authentication in example apps.

## Testing Strategy

Use multiple layers:

- Storybook a11y addon for fast checks.
- Testing Library for semantic queries.
- Playwright for keyboard and workflow tests.
- Manual keyboard passes for complex patterns.
- Screen reader spot checks for review, timeline, and AI panels.

## Pattern-Specific Notes

### Empty State

Empty states use headings and direct descriptions. Actions should be explicit and task-oriented.

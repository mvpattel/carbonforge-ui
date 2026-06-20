import type { ReactNode } from "react";
import { Button } from "@carbon/react";

export type EmptyStateAction = {
  label: string;
  kind?: "primary" | "secondary" | "tertiary" | "ghost";
  onClick: () => void;
};

export type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actions?: EmptyStateAction[];
};

export function EmptyState({ title, description, icon, actions = [] }: EmptyStateProps) {
  return (
    <section className="cfg-empty-state" aria-labelledby="cfg-empty-state-title">
      {icon ? <div className="cfg-empty-state__icon">{icon}</div> : null}
      <div className="cfg-empty-state__copy">
        <h2 id="cfg-empty-state-title" className="cfg-empty-state__title">
          {title}
        </h2>
        <p className="cfg-empty-state__description">{description}</p>
      </div>
      {actions.length > 0 ? (
        <div className="cfg-empty-state__actions">
          {actions.map((action) => (
            <Button key={action.label} kind={action.kind ?? "primary"} onClick={action.onClick}>
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

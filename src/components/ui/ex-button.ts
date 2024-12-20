import "@/components/ui/ex-spinner";
import { cn } from "@/utils/style";
import { cva } from "class-variance-authority";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import TailwindElement from "../tailwind-element";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "hover:text-primary !px-0 ",
      },
      size: {
        default: "h-10 px-3 py-1",
        sm: "h-8 rounded px-2",
        lg: "h-11 rounded px-6",
        icon: "h-6 w-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

@customElement("ex-button")
export class ExButton extends TailwindElement {
  @property({
    type: String,
  })
  size?: "default" | "sm" | "lg" | "icon" = "default";

  @property({ type: Boolean })
  disabled?: boolean = false;

  @property({ type: Boolean })
  loading?: boolean;

  @property({
    type: String,
  })
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link" = "default";

  @property({ type: String })
  class?: string;

  render() {
    return html`
      <button
        class=${cn(
          buttonVariants({
            variant: this.variant,
            size: this.size,
          }),
          this.class,
        )}
        ?disabled=${this.disabled || this.loading}
      >
        <slot></slot>
        ${this.loading
          ? html`<div
              class="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-solid border-primary-foreground border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            ></div>`
          : nothing}
      </button>
    `;
  }
}

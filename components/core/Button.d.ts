import * as React from 'react';

/**
 * TCS Group button — pill-shaped call-to-action.
 *
 * @startingPoint section="Core" subtitle="Primary / secondary / outline / ghost buttons" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Salmon primary CTA, navy secondary, outline or ghost for low emphasis. */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

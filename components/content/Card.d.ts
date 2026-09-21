import * as React from 'react';

/** TCS Group base surface card. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable hover-lift + shadow for clickable cards. */
  interactive?: boolean;
  /** CSS padding value (defaults to --space-5). */
  padding?: string;
}
export declare function Card(props: CardProps): JSX.Element;

import * as React from 'react';

/** TCS Group tag / badge — status pills and category chips. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'navy' | 'salmon' | 'sky' | 'slate' | 'outline' | 'success';
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
}
export declare function Tag(props: TagProps): JSX.Element;

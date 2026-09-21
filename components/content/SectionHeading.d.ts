import * as React from 'react';

/** TCS Group marketing section heading (eyebrow + title + description). */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** "light" for placement on navy/dark backgrounds. */
  tone?: 'dark' | 'light';
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;

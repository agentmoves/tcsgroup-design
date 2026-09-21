import * as React from 'react';

/** TCS Group headline statistic (e.g. "$500M+ closed"). */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
  tone?: 'navy' | 'salmon' | 'light';
  align?: 'center' | 'left';
}
export declare function StatBlock(props: StatBlockProps): JSX.Element;

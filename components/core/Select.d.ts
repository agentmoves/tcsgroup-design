import * as React from 'react';

export type SelectOption = string | { value: string; label: string };

/** TCS Group select — styled native dropdown matching Input. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  options?: SelectOption[];
  size?: 'md' | 'lg';
}
export declare function Select(props: SelectProps): JSX.Element;

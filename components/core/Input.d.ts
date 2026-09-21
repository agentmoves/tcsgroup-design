import * as React from 'react';

/** TCS Group text input with label, hint/error, optional icon and prefix. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: React.ReactNode;
  /** Static prefix inside the field, e.g. "$". */
  prefix?: string;
  size?: 'md' | 'lg';
}
export declare function Input(props: InputProps): JSX.Element;

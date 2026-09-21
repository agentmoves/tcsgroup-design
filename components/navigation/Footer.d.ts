import * as React from 'react';

export interface FooterColumn { title: string; links: string[]; }
/** TCS Group navy site footer with link columns, contact, and socials. */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  columns?: FooterColumn[];
  address?: string;
  phone?: string;
  email?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;

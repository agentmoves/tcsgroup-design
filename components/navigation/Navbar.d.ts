import * as React from 'react';

/**
 * TCS Group site header with logo, nav, phone and CTA.
 *
 * @startingPoint section="Navigation" subtitle="Site header — solid & transparent" viewport="1200x84"
 */
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  links?: string[];
  /** Highlighted nav item. */
  active?: string;
  phone?: string;
  /** "transparent" for placement over a hero image; "solid" white otherwise. */
  variant?: 'solid' | 'transparent';
  cta?: string;
}
export declare function Navbar(props: NavbarProps): JSX.Element;

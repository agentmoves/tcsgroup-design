import * as React from 'react';

/**
 * TCS Group logo — official pillar mark + wordmark (monochrome PNG).
 *
 * @startingPoint section="Brand" subtitle="TCS Group logo — mark + wordmark" viewport="700x160"
 */
export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** "full" = TCS Group lockup; "kw" = TCS Group + KW co-brand lockup. */
  variant?: 'full' | 'kw';
  /** Monochrome shade: "light" -> white asset (dark bg); "navy"/"black" -> black asset. */
  tone?: 'navy' | 'black' | 'light';
  /** Nominal size in px; the logo height is ~1.25× this. */
  size?: number;
  /** Override the resolved asset URL. */
  src?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;

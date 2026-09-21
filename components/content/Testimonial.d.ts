import * as React from 'react';

/** TCS Group testimonial / review card with star rating. */
export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  name: string;
  detail?: string;
  /** Filled stars, 0–5. Default 5. */
  stars?: number;
}
export declare function Testimonial(props: TestimonialProps): JSX.Element;

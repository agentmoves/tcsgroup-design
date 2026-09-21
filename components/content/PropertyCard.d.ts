import * as React from 'react';

/**
 * TCS Group property listing card — signature real-estate surface.
 *
 * @startingPoint section="Content" subtitle="Real-estate listing card with photo, price & specs" viewport="380x420"
 */
export interface PropertyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Photo URL. Falls back to a branded navy placeholder if omitted. */
  image?: string;
  /** Status label, e.g. "For Sale" / "For Rent" / "Sold". */
  status?: string;
  statusTone?: 'salmon' | 'navy' | 'sky' | 'success';
  featured?: boolean;
  price?: string;
  address?: string;
  locality?: string;
  beds?: number | string;
  baths?: number | string;
  sqft?: number | string;
  /** Listing agent / brokerage line. */
  agent?: string;
}
export declare function PropertyCard(props: PropertyCardProps): JSX.Element;

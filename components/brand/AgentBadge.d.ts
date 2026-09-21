export interface AgentRecord {
  slug: string;
  name: string;
  title: string;
  team: string;
  phone: string;
  email: string;
  /** Instagram handle (e.g. "@delcourtbass") where on file. */
  instagram?: string;
  licensePA?: string;
  licenseNJ?: string;
  /** false when the agent has opted out of using a headshot. */
  headshotOptIn?: boolean;
  /** Absolute headshot URL, resolved against the loaded design-system bundle. */
  photo: string;
}

/** The full embedded TCS Group active roster, keyed by slug. */
export declare const AGENTS: Record<string, Omit<AgentRecord, 'slug' | 'photo'>>;

/** Resolve a slug, full name, or email address to a roster record. Returns null if unknown. */
export declare function getAgent(key: string): AgentRecord | null;

/** Headshot URL for a slug/name; falls back to the logo tile for unknown agents. */
export declare function agentPhoto(key: string): string;

/** Capitalized namespace for the helpers — reachable as window.<Namespace>.Agent.* */
export declare const Agent: {
  get(key: string): AgentRecord | null;
  photo(key: string): string;
  all: Record<string, Omit<AgentRecord, 'slug' | 'photo'>>;
};

export interface AgentBadgeProps {
  /** Roster slug (e.g. "gaurav-gambhir"), full name, or email. */
  slug: string;
  /** Headshot edge length in px. */
  size?: number;
  shape?: 'rounded' | 'circle' | 'rect';
  /** "light" for navy/salmon surfaces, "dark" for white surfaces. */
  tone?: 'light' | 'dark';
  showTitle?: boolean;
  showPhone?: boolean;
  showEmail?: boolean;
  /** Photo side: "right" puts text left of the photo (default), "left" reverses. */
  align?: 'left' | 'right';
  style?: React.CSSProperties;
}

/**
 * Agent headshot + contact block, auto-populated from the embedded roster.
 * @startingPoint section="Brand" subtitle="Agent headshot + contact, auto-filled from the roster" viewport="700x200"
 */
export declare function AgentBadge(props: AgentBadgeProps): JSX.Element;

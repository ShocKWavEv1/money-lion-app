export interface EmptyStateProps {
  title: string;
  description: string;
  hasCta?: boolean;
  ctaCallback?: () => void;
  ctaText?: string;
}

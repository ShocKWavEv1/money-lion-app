"use client";

import EmptyState from "@/components/emptyState/emptyState";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<Props> = ({ error, reset }) => {
  return (
    <div>
      <EmptyState
        title={error.message}
        description="This page is having some troubleshooting"
        hasCta
        ctaCallback={reset}
        ctaText="Try again"
      />
    </div>
  );
};

export default ErrorPage;

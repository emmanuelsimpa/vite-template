import { cn } from "@/utils/cn";
import { Fragment } from "react";

type Tloading = {
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

type TSkeleton = React.HTMLAttributes<HTMLDivElement> & Tloading;

export function Skeleton({
  className,
  loading,
  children,
  ...props
}: TSkeleton) {
  return (
    <Fragment>
      {!loading ? (
        children
      ) : (
        <div
          className={cn(
            "animate-pulse rounded-md bg-grey-400 dark:bg-slate-800",
            className,
          )}
          {...props}
        />
      )}
    </Fragment>
  );
}

import * as React from "react";

import { cn } from "@/utils/cn";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  password?: boolean;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, password, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(true);
    return (
      <div className="grid w-full max-w-md items-center gap-1.5">
        <label htmlFor={label}>{label}</label>
        {!password ? (
          <div>
            <input
              id={label}
              type={type}
              className={cn(
                "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                className,
              )}
              ref={ref}
              {...props}
            />
            {error && <p className="p1 text-error ease-in">{error}</p>}
          </div>
        ) : (
          <div className="relative w-full">
            <input
              id={label}
              type={showPassword ? "password" : "text"}
              className={cn(
                "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                className,
              )}
              ref={ref}
              {...props}
            />
            {showPassword ? (
              <div className="absolute top-0 right-0  h-full flex items-center justify-end pr-5 cursor-pointer">
                <EyeIcon
                  className=" h-5 w-5  text-grey"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            ) : (
              <div className="absolute top-0 right-0 h-full flex items-center justify-end pr-5 cursor-pointer">
                <EyeOffIcon
                  className=" h-5 w-5  text-grey"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            )}
            {error && <p className="p2 text-error">{error}</p>}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };

import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-black bg-background px-4 py-5 h-36 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-offset-2 disabled:cursor-not-allowed outline-none disabled:opacity-50 resize-none ",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

import type { PropsWithChildren } from "react";

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside className="flex h-screen w-72 flex-col gap-2 bg-zinc-900 p-2">
      {children}
    </aside>
  );
};

import { ReactNode } from "react";

export function RecipeTimetable({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4 p-6 bg-snow font-semibold rounded-xl">
      <h2 className="text-darkRaspberry text-xl">Preparation time</h2>
      <ul className="space-y-2 ml-2">{children}</ul>
    </section>
  );
}

import { ReactNode } from "react";

type CardSectionProps = {
  title: string;
  children: ReactNode;
};

export function RecipeSection({ title, children }: CardSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-brandyRed text-[28px] leading-none font-youngSerif">
        {title}
      </h2>
      {children}
    </section>
  );
}

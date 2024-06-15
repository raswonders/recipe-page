type RecipeIntroProps = {
  title: string;
  description: string;
};

export function RecipeIntro({ title, description }: RecipeIntroProps) {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-youngSerif text-4xl leading-none font-normal">
        {title}
      </h1>
      <p>{description}</p>
    </section>
  );
}

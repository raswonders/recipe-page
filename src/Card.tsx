import { RecipeSection } from "./RecipeSection.tsx";
import { RecipeTimetable } from "./RecipePreparation.tsx";
import { Line } from "./Line.tsx";
import recipe from "./data/SimpleOmelette.tsx";
import omeletteImage from "/public/assets/images/image-omelette.jpeg";

export function Card() {
  return (
    <div className="sm:p-10 sm:space-y-10 max-w-[736px] bg-white sm:rounded-3xl sm:my-32 font-outfit">
      <header>
        <img src={omeletteImage} className="sm:rounded-xl" alt={recipe.title} />
      </header>
      <div className="flex flex-col p-10 sm:p-0 gap-8 text-base">
        <section className="flex flex-col gap-6">
          <h1 className="font-youngSerif text-4xl leading-none font-normal">
            {recipe.title}
          </h1>
          <p>{recipe.description}</p>
        </section>
        <RecipeTimetable>
          {Object.entries(recipe.time).map(([key, value]) => {
            return (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <span className="font-normal">{`: ${value}`}</span>
              </li>
            );
          })}
        </RecipeTimetable>

        <RecipeSection title="Ingredients">
          <ul className="space-y-2 ml-2">
            {recipe.ingredients.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </RecipeSection>
        <Line />
        <RecipeSection title="Instructions">
          <ol className="list-decimal ml-5 space-y-2 font-semibold">
            {recipe.instructions.map((item) => {
              const [key, value] = item.split(":");
              return (
                <li key={key} className="text-brandyRed">
                  <span className="text-black">
                    {key}
                    <span className="font-normal">{`: ${value}`}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </RecipeSection>
        <Line />
        <RecipeSection title="Nutrition">
          <p className="">{recipe.nutrition.description}</p>
          <div className="space-y-3">
            {recipe.nutrition.items.map(([key, value]) => {
              return (
                <div key={key}>
                  <div className="flex px-8">
                    <div className="basis-1/2">{key}</div>
                    <div className="basis-1/2 font-semibold text-brandyRed">
                      {value}
                    </div>
                  </div>
                  <Line />
                </div>
              );
            })}
          </div>
        </RecipeSection>
      </div>
    </div>
  );
}

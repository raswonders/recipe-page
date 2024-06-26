import { RecipeSection } from "./RecipeSection.tsx";
import { RecipeTimetable } from "./RecipePreparation.tsx";
import { Line } from "./Line.tsx";
import { RecipeIntro } from "./RecipeIntro.tsx";
import { RecipeData } from "./App.tsx";

export function Recipe({ data }: { data: RecipeData }) {
  return (
    <div className="sm:p-10 sm:space-y-10 max-w-[736px] bg-white sm:rounded-3xl sm:my-32 font-outfit">
      <header>
        <img src={data.image} className="sm:rounded-xl" alt={data.title} />
      </header>
      <div className="flex flex-col p-10 sm:p-0 gap-8 text-base">
        <RecipeIntro title={data.title} description={data.description} />
        <RecipeTimetable>
          {Object.entries(data.time).map(([key, value]) => {
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
            {data.ingredients.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </RecipeSection>
        <Line />
        <RecipeSection title="Instructions">
          <ol className="list-decimal ml-5 space-y-2 font-semibold">
            {data.instructions.map((item) => {
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
          <p className="">{data.nutrition.description}</p>
          <div className="space-y-3">
            {data.nutrition.items.map(([key, value]) => {
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

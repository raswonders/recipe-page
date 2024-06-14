import { Line } from "./Line.tsx";
import recipe from "./data/SimpleOmelette.tsx";

function App() {
  return (
    <>
      <header className="">
        <img
          src="../public/assets/images/image-omelette.jpeg"
          alt={recipe.title}
        />
      </header>
      <div className="flex flex-col p-10 gap-8 text-base">
        <section className="flex flex-col space-y-6">
          <h1 className="font-youngSerif text-4xl leading-none font-normal">
            {recipe.title}
          </h1>
          <p>{recipe.description}</p>
        </section>

        <section className="flex flex-col gap-4 p-6 bg-snow text-xl font-semibold rounded-xl">
          <h3 className="text-darkRaspberry">Preparation time</h3>
          <ul className="space-y-2">
            {Object.entries(recipe.time).map(([key, value]) => {
              return (
                <li>
                  {key}
                  <span className="font-normal">{`: ${value}`}</span>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-brandyRed text-[28px] leading-none">
            Ingredients
          </h2>
          <ul className="space-y-2 ml-2">
            {recipe.ingredients.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </section>

        <Line />

        <section className="flex flex-col gap-6">
          <h2 className="text-brandyRed text-[28px] leading-none">
            Instructions
          </h2>
          <ol className="list-decimal ml-5 space-y-2 font-semibold">
            {recipe.instructions.map((item) => {
              const [key, value] = item.split(":");
              return (
                <li className="text-brandyRed">
                  <span className="text-black">
                    {key}
                    <span className="font-normal">{`: ${value}`}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </section>

        <Line />

        <section className="flex flex-col gap-6">
          <h2 className="text-brandyRed text-[28px] leading-none">Nutrition</h2>
          <p className="">{recipe.nutrition.description}</p>
          <div className="space-y-3">
            {recipe.nutrition.items.map(([key, value]) => {
              return (
                <>
                  <div className="flex px-8">
                    <div className="basis-1/2">{key}</div>
                    <div className="basis-1/2 font-semibold text-brandyRed">{value}</div>
                  </div>
                  <Line />
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;

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
      <div className="flex flex-col p-10 space-y-8 text-base">
        <section className="flex flex-col space-y-6">
          <h1 className="font-youngSerif text-4xl leading-none font-normal">
            {recipe.title}
          </h1>
          <p>{recipe.description}</p>
        </section>

        <section>
          <div className="flex flex-col space-y-4 p-6 text-xl font-semibold">
            <h3 className="">Preparation time</h3>
            <ul className="">
              {Object.entries(recipe.time).map(([key, value]) => {
                return (
                  <li>
                    {key}
                    <span className="font-normal">{`: ${value}`}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </section>

        <Line />

        <section>
          <h2 className="">Instructions</h2>
          <ol className="">
            {recipe.instructions.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </section>

        <Line />

        <section className="">
          <h2 className="">Nutrition</h2>
          <p className="">{recipe.nutrition.description}</p>
          <ul className="">
            {recipe.nutrition.items.map(([key, value]) => {
              return (
                <li className="flex justify-between">
                  <div>{key}</div>
                  <div>{value}</div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;

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
      <div className="flex flex-col p-10 space-y-8">
        <section className="flex flex-col">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="">
            <h3 className="">Preparation time</h3>
            <ul className="">
              {Object.entries(recipe.time).map(([key, value]) => {
                return (
                  <li>
                    <span className="">{key}</span>:{value}
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

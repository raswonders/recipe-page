import { Recipe } from "./Recipe.tsx";
import recipe from "./data/SimpleOmelette.tsx";

export type RecipeData = typeof recipe;

function App() {
  return (
    <main className="flex justify-center items-center bg-eggshell">
      <Recipe data={recipe} />
    </main>
  );
}

export default App;

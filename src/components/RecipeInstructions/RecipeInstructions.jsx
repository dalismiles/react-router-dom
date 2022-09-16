import { useOutletContext } from "react-router-dom";
import styles from "./index.module.scss";

const RecipeIngredients = () => {
  const recipe = useOutletContext();

  return (
    <div className={styles.RecipeIngredients}>
      <p> {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeIngredients;

import { useOutletContext } from "react-router-dom";
import styles from "./index.module.scss";

const RecipeInstructions = () => {
  const recipe = useOutletContext();

  return (
    <div className={styles.RecipeInstructions}>
      <p> {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeInstructions;

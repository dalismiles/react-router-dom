import React, { Fragment } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./index.module.scss";

const RecipeIngredients = () => {
  const recipe = useOutletContext();
  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <ul className={styles.RecipeIngredients}>
      {!!recipe &&
        indexes.map((index) => (
          <Fragment key={index}>
            {recipe[`strIngredient${index}`]?.length ? (
              <li>
                {recipe[`strIngredient${index}`]}:{recipe[`strMeasure${index}`]}
              </li>
            ) : null}
          </Fragment>
        ))}
    </ul>
  );
};

export default RecipeIngredients;

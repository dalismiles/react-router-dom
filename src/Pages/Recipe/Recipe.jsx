import React from "react";
import { Outlet, useParams, Link, NavLink } from "react-router-dom";
import { ENDPOINTS } from "../../api/endpoints";
import { useFetch } from "../../api/use-fetch";
import styles from "./index.module.scss";

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? null;

  const tabs = [
    { label: "Recipe", path: "./istruzioni" },
    { label: "Ingredients", path: "./ingredienti" },
    { label: "Video", path: "./youtube" },
  ];

  if (!data || loading) {
    return "loading...";
  }

  console.log(data);

  return (
    <>
      <div className={styles.Recipe}>
        <header>
          <div>
            <div>
              <h2 className={styles.linkcategory}>
                <Link to={`/catalogo/${categoryName}`}>{categoryName}</Link>
              </h2>
              <h1 className={styles.titleRecipe}>{recipeName}</h1>

              <img width={100} src={recipe.strMealThumb} alt={recipeName} />
            </div>
          </div>
        </header>

        <ul className="links">
          {tabs.map(({ label, path }) => (
            <li className="nav-item" key={path}>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? "active" : "not-active"}`
                }
                style={({ isActive }) => {
                  return {
                    color: isActive ? "rgb(153, 82, 6)" : "gray",
                    pointerEvents: isActive ? "none" : "auto",
                    opacity: isActive ? 0.4 : 1,
                  };
                }}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={recipe} />
      </div>
    </>
  );
};

export default Recipe;

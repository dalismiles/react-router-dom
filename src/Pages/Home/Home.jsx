// import styles from './index.module.scss'
import React, { Suspense } from "react";

import { useLoaderData, Await, useSearchParams } from "react-router-dom";

import { ENDPOINTS } from "../../api/endpoints.js";
import { useFetch } from "../..//api/use-fetch.js";
import CategoryList from "../../components/CategoryList";

import styles from "./index.module.scss";

export const Home = () => {
  const { categories } = useLoaderData();
  const [search, setSearch] = useSearchParams();

  const page = search?.get("page") ?? 1;
  const perPage = 6;
  const paginated = React.useMemo(() => {
    return categories?.slice((page - 1) * perPage, page * perPage);
  }, [page, categories]);
  const handlePageChange = (variation) => {
    setSearch((prev) => {
      return { page: Number(prev.get("page")) + variation };
    });
  };

  // eslint-disable-next-line
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return "Loading...";
  }

  return (
    <div className={styles.Home}>
      <div>
        <Suspense fallback={<div style={{ color: "red" }}>Loading...</div>}>
          <Await
            resolve={categories}
            errorElement={<div>Could not load reviews 😬</div>}
          >
            {() => <CategoryList categories={paginated} />}
          </Await>
        </Suspense>
      </div>
      <div>
        <button disabled={page==1} onClick={handlePageChange.bind(this, -1)}>Prev</button>
        <button disabled={page==3} onClick={handlePageChange.bind(this, +1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;

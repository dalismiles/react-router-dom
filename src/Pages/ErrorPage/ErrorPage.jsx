import styles from "./index.module.scss";

import Error404 from "../../images/404.jpg";

const ErrorPage = (props) => {
  console.log(props);
  return props.status === 404 ? (
    <div className={styles.error}>
      <img src={Error404} alt="We are sorry! Page not found!" />
    </div>
  ) : (
    "Error!"
  );
};

export default ErrorPage;

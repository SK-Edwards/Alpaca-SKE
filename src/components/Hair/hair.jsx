import styles from "./hair.css";

const Hair = ({img}) => {
    return(
        <img className={styles.absolute} src={img} alt="hair" />
    )
};

export default Hair;
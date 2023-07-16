import styles from "./neck.css";

const Neck = ({img}) => {
    return(

        <img className={styles.absolute} src={img} alt="neck" />
    )
};

export default Neck;
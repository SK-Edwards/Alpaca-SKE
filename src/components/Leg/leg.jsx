import styles from "./leg.css";

const Leg = ({img}) => {
    return(
        <img className={styles.absolute} src={img} alt="leg" />
    )
};


export default Leg;
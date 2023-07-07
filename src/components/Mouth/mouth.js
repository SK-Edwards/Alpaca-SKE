import styles from "mouth.css";

const Mouth = ({img}) => {
    return(

        <img className={styles.absolute} src={img} alt="mouth" />

    )
};


export default Mouth;
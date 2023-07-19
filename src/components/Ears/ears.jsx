import styles from "./ears.module.css"

const Ears = ({img}) => {
    return(
            <img className={styles.absolute} src={img} alt="ears"/>
            )
}

export default Ears;
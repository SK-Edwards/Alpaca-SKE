import styles from "./ears.module.css"

const Ears = ({img}) => {
    return(
            <img className={styles.absulute} src={img} alt="ears"/>
            )
}

export default Ears;
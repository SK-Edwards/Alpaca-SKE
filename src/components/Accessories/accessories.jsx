import styles from "./accessories.module.css"

const Accessories = ({img}) => {
    return (
        <img className={styles.absolute} src={img} alt="accssories"/>
    )
}

export default Accessories;
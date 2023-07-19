import styles from "./eyes.module.css";

const Eyes = ({img}) => {
return(
    <img className={styles.absolute} src={img} alt="ears" />
)

}
export default Eyes;
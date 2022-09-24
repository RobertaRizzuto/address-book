import styles from "./index.module.scss";

const Contact = ({name, surname, number}) => {
  return (
    <div className={styles.Contact}>
      <p className={styles.name}> {name} {surname}</p>
      <p className={styles.number}> {number} </p>
    </div>
  );
};

export default Contact;

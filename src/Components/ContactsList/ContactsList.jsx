import styles from "./index.module.scss";

const ContactsList = ({ children }) => {
  return (
    <div className={styles.ContactsList}>
      <h3 className={styles.title}>ContactsList</h3>
      <ul className={styles.list}>
        <li className={styles.item}>{children}</li>
      </ul>
    </div>
  );
};

export default ContactsList;

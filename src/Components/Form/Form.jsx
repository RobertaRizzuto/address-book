import styles from "./index.module.scss";
const Form = ({
  onHandleSubmit,
  setContactName,
  setContactSurname,
  setContactNumber,
  contactName,
  contactSurname,
  contactNumber,
}) => {
  return (
    <form className={styles.Form} onSubmit={onHandleSubmit}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setContactName(e.target.value)}
        value={contactName}
        placeholder="Nome.."
      />
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setContactSurname(e.target.value)}
        value={contactSurname}
        placeholder="Cognome.."
      />
      <input
        type="text"
        className={styles.input}
        onChange={(e) => setContactNumber(e.target.value)}
        value={contactNumber}
        placeholder="Numero.."
      />
      <button type="submit">AGGIUNGI</button>
    </form>
  );
};
export default Form;

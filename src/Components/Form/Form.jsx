import styles from "./index.module.scss";
const Form = ({onHandleSubmit,setContactName, setContactSurname, setContactNumber}) => {
  return (
    <Form className={styles.Form} onSubmit={onHandleSubmit}>
      <input type="text" className={styles.input} onChange={(e)=>setContactName(e.target.value)} placeholder="Nome.."/>
      <input type="text" className={styles.input} onChange={(e)=>setContactSurname(e.target.value)} placeholder="Cognome.."/>
      <input type="text" className={styles.input} onChange={(e)=>setContactNumber(e.target.value)} placeholder="Numero.."/>
      <button type="submit">AGGIUNGI</button>
    </Form>
  );
};
export default Form;

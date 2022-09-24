import { useCallback } from "react";
import { useState } from "react";
import styles from "./App.module.scss";
import Contact from "./Components/Contact";
import ContactsList from "./Components/ContactsList";
import Form from "./Components/Form";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Marco", surname: "Rossi", number: "320 0000000" },
    { name: "Pinco", surname: "Panco", number: "123 4567789" },
    { name: "Pippo", surname: "Pluto", number: "999 9999999" },
  ]);
  const [contactName, setContactName] = useState("");
  const [contactSurname, setContactSurname] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      contactName &&
        contactSurname &&
        contactNumber &&
        contacts.push({
          name: contactName,
          surname: contactSurname,
          number: contactNumber,
        });
      setContacts([...contacts]);
      setContactNumber("");
      setContactSurname("");
      setContactName("");
    },
    [contactNumber, contactName, contactSurname, contacts]
  );

  return (
    <div className={styles.App}>
      <Form
        contactName={contactName}
        contactSurname={contactSurname}
        contactNumber={contactNumber}
        onHandleSubmit={onHandleSubmit}
        setContactName={setContactName}
        setContactSurname={setContactSurname}
        setContactNumber={setContactNumber}
      />
      <ContactsList>
        {contacts?.map((el, i) => (
          <Contact
            key={i}
            name={el.name}
            surname={el.surname}
            number={el.number}
          />
        ))}
      </ContactsList>
    </div>
  );
}

export default App;

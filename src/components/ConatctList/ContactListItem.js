import React from "react";

import s from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={s.listItem}>
    {`${name}: ${number}`}
    <button type="button" onClick={onRemove}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

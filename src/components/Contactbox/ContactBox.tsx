import {
  MdOutlinePhoneInTalk as Tel,
  MdOutlineApartment as Adress,
  MdOutlinePrint as Fax,
} from 'react-icons/md';

export function ContactBox() {
  return (
    <address>
      <ul>
        <li>
          <Adress />
        </li>
        <li>
          <Tel />
        </li>
        <li>
          <Fax />
        </li>
      </ul>
    </address>
  );
}

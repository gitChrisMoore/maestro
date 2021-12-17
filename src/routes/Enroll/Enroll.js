import { Route, Routes } from "react-router-dom";

import { EmailForm } from "./Email/EmailForm";
import { PasswordForm } from "./Password/PasswordForm";
import { NameForm } from "./Name/NameForm";
import { DateofBirthForm } from "./DateofBirth/DateofBirthForm"
import { PhoneForm } from "./Phone/PhoneForm"
import { AddressForm } from "./Address/AddressForm"
import { Confirm } from "./Confirm/Confirm"

function Enroll() {
  return (
    <div>
        <Routes>
            <Route path='email' element={<EmailForm/>} />
            <Route path='password' element={<PasswordForm/>} /> 
            <Route path='name' element={<NameForm/>} />
            <Route path='dateofbirth' element={<DateofBirthForm/>} />
            <Route path='phone' element={<PhoneForm/>} />
            <Route path='address' element={<AddressForm/>} />
            <Route path='confirm' element={<Confirm/>} />
        </Routes>
    </div>
  );
}

export default Enroll;

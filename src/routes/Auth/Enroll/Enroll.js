import { Route, Routes } from 'react-router-dom';

import { PersonForm } from './Person/PersonForm';
import { PhoneForm } from './Phone/PhoneForm';
import { AddressForm } from './Address/AddressForm';
import { ReviewIndividual } from './ReviewIndividual/ReviewIndividual';

function Enroll() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PersonForm />} />
                <Route path="person" element={<PersonForm />} />
                <Route path="phone" element={<PhoneForm />} />
                <Route path="address" element={<AddressForm />} />
                <Route path="review" element={<ReviewIndividual />} />
            </Routes>
        </div>
    );
}

export default Enroll;

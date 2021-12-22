import { useState, useEffect } from 'react';
import { getMostRecentPerson } from '../../../../lib/domain/person/Person';
import { getMostRecentAddress } from '../../../../lib/domain/address/Address';
import { getMostRecentPhone } from '../../../../lib/domain/phone/Phone';
import { AddressReview } from '../Address/AddressReview';
import { PersonReview } from '../Person/PersonReview';
import { PhoneReview } from '../Phone/PhoneReview';
import { ListItem } from '@mui/material';
import { useAuth } from '../../../../contexts/Auth';
import { createIndividual } from '../../../../lib/domain/individuals/Individual';

export function ReviewIndividual() {
    const [person, setPerson] = useState({});
    const [address, setAddress] = useState({});
    const [phone, setPhone] = useState({});
    const { user } = useAuth();

    const getPerson = async () => {
        const mostRecentPerson = await getMostRecentPerson();
        setPerson(mostRecentPerson);
    };
    const getAddress = async () => {
        const mostRecentAddress = await getMostRecentAddress();
        setAddress(mostRecentAddress);
    };
    const getPhone = async () => {
        const mostRecentPhone = await getMostRecentPhone();
        setPhone(mostRecentPhone);
    };

    async function handleCreateIndividual() {
        let newIndividual = {
            user_id: user.id,
            persons_id: person.id,
            addresses_id: address.id,
            phoneNumber_id: phone.id
        };
        const res = await createIndividual(newIndividual);
        console.log(res);
    }

    useEffect(() => {
        getPerson();
        getAddress();
        getPhone();
    }, []);

    return (
        <>
            <PersonReview formValues={person} />
            <PhoneReview formValues={phone} />
            <AddressReview formValues={address} />
            <ListItem button onClick={handleCreateIndividual}>
                Accept
            </ListItem>
        </>
    );
}

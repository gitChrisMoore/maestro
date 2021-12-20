import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import AddressInterface from "../../../../lib/domain/address/AddressInterface"
import { useAuth } from "../../../../contexts/Auth"

export const useAddressForm = () => {
    const navigate = useNavigate()
    const {createAddress} = AddressInterface()
    const {user} = useAuth()

    const validationSchema = yup.object({
        address1: yup
            .string()
            .required(),
        city: yup
            .string()
            .required(),
        state: yup
            .string()
            .required(),
        postalCode: yup
            .string()
            .required(),
    });

    const formik = useFormik({
        initialValues: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            postalCode: '',
            country: 'US',
          
        },
        validationSchema: validationSchema,
        onSubmit: async (uiAddress) => {
            
            uiAddress['user_id'] = user.id
            let newAddress = await createAddress(uiAddress)
            if (newAddress) navigate('/enroll/confirm');
        },
    });

    return {
        formik
    };  
};
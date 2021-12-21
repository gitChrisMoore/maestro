// import { Button } from '@mui/material/';
// import { Field, FormikProvider } from 'formik';
// import { TextFormField } from '../../../../lib/components/FormFields/TextFormField';
// import { SubmitFormButton } from '../../../../lib/components/FormFields/SubmitFormButton';
import { useConfirmForm } from './useConfirmForm';
import { ConfirmForm } from './ConfirmForm';

// export function Confirm() {
//     const { formik } = useConfirmForm();

//     return (
//         <FormikProvider value={formik}>
//             <form onSubmit={formik.handleSubmit}>
//                 <Field name="username" label="Username" component={TextFormField} />
//                 <Field name="submitForm" component={SubmitFormButton} />
//             </form>
//         </FormikProvider>
//     );
// }
export function Confirm() {
    const { formik } = useConfirmForm();

    return (
        <>
            <ConfirmForm formik={formik} />
        </>
    );
}

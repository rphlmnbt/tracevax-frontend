import * as yup from "yup"

const schema = yup.object().shape({

    email: yup.string().email('Invalid email').nullable(),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .nullable(),
    first_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),
    last_name: yup.string()
                .max(50, 'Too Long!')
                .nullable(),
    contact_number: yup.number()
                .min(1, "Invalid")
                .nullable(),
    gender: yup.string()
                .nullable(),
    civil_status: yup.string()
                    .nullable(),
    birth_date: yup.string()
                    .nullable(),
    home_address: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .nullable(),
                
})

export default schema
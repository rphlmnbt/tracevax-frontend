import * as yup from "yup"

const schema = yup.object().shape({

    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required("Required"),
    first_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    last_name: yup.string()
                .max(50, 'Too Long!')
                .required('Required'),
    contact_number: yup.number()
                .min(1, "Invalid")
                .required('Required'),
    gender: yup.string()
                .required("Required"),
    civil_status: yup.string()
                .required('Required'),
    birth_date: yup.string()
                .required('Required'),
    home_address: yup.string()
                .min(4, "Please enter at least 4 characters.")
                .required('Required'),
                
})

export default schema
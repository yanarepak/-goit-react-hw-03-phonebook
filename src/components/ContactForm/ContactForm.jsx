import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PT from 'prop-types';
import css from '../ContactForm/ContactForm.module.css';


let schema = yup.object().shape({
  name: yup
    .string()
    .min(8)
    .max(80)
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .number()
    .min(10)
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});


export const ContactForm = ({addContact}) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const onHandleSubmitForm = (values, { resetForm}) => {
    addContact(values);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmitForm}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
            <Field type="text" name="name" id="name" placeholder="Enter name" className={css.input}/>
            <ErrorMessage component="div" name="name" className={css.message}/>
          </label>
          <label htmlFor="number" className={css.label}>
            Number
            <Field
              type="tel"
              name="number"
              id="number"
              placeholder="Enter phone number"
              className={css.input}
            />
            <ErrorMessage component="div" name="number" className={css.message}/>
          </label>
          <button type="submit" className={css.btn}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  addContact: PT.func.isRequired
}
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  ConteinerForm,
  Label,
  Input,
  ErrorName,
  ErrorImg,
  BtnContainer,
} from './HeroForm.styled';
import { useCreateHero } from 'hooks/useCreateHero';
import Btn from 'components/Btn/Btn';

const validationSchema = Yup.object({
  nickname: Yup.string().required(),
  images: Yup.string().url().required(),
});

export default function HeroForm() {
  const { createHero } = useCreateHero();

  return (
    <Formik
      initialValues={{ nickname: '', images: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        createHero(values);
        resetForm({ values: '' });
      }}
    >
      {({ isValid, dirty }) => (
        <ConteinerForm autoComplete="off">
          <Label htmlFor="nickname">nickname</Label>
          <Input name="nickname" type="text" />
          <ErrorMessage name="nickname">
            {msg => <ErrorName>{msg}</ErrorName>}
          </ErrorMessage>
          <Label htmlFor="images">images URL</Label>
          <Input name="images" type="text" />
          <ErrorMessage name="images">
            {msg => <ErrorImg>{msg}</ErrorImg>}
          </ErrorMessage>
          <BtnContainer>
            <Btn
              text="Create Hero"
              type="submit"
              disabled={!isValid && !dirty}
            />
          </BtnContainer>
        </ConteinerForm>
      )}
    </Formik>
  );
}

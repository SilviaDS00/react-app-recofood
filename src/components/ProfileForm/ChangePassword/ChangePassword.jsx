import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import {useAuth} from "../../../hooks/useAuth";
import {User} from "../../../api/user";
import { initialValues, validationSchema } from "./ChangePassword.form";
import "../ProfileForm.scss";

const userCtrl = new User();
export function ChangePasswordForm() {
    const { user, logout } = useAuth();
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  
    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: validationSchema(),
      validateOnChange: false,
      onSubmit: async (formValue) => {
        try {
          await userCtrl.updateMe(user.id, { password: formValue.password });
          setIsPasswordChanged(true);
          setTimeout(() => {
            setIsPasswordChanged(false);
          }, 3000);
        } catch (error) {
          throw error;
        }
      },
    });
  
    return (
      <Form onSubmit={formik.handleSubmit}>
        <label>Cambiar contraseña</label>
        <div className="content">
          <Form.Input
            type="password"
            name="password"
            placeholder="Nueva contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Form.Input
            type="password"
            name="repeatPassword"
            placeholder="Repetir contraseña"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
            error={formik.errors.repeatPassword}
          />
          <Form.Button type="submit" loading={formik.isSubmitting}>
            Cambiar
          </Form.Button>
        </div>
  
        {isPasswordChanged && (
          <div className="confirmationMessage">
            Se ha cambiado la contraseña correctamente.
          </div>
        )}
      </Form>
    );
  }
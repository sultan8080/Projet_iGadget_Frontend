import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import apiBackEnd from "../../api/backend/api.Backend";
import { URL_BACK_FORGET_PASSWORD } from "../../constants/urls/urlBackEnd";

/**
 * Component Login
 *
 * @author sultan
 */
const ForgetPassword = () => {

  const handleForgetPassword = (values) => {
    apiBackEnd.post(URL_BACK_FORGET_PASSWORD, {
      email: values.email,
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("An email a été envoyé !", {
            position: toast.POSITION.TOP_CENTER,
          });     
        }
      })
      // .catch(() => setErrorLog(true));
      .catch(function (error) {
        toast.error("Désolé ! Email non trouvé", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="w-full max-w-md space-y-4 rounded-md bg-white p-4 py-12 px-4 shadow-lg sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-center text-3xl font-bold text-primary">
          MOT DE PASSE OUBLIÉ
        </h2>
        <small className="text-center">
          Saisissez l'adresse e-mail associé à votre compte iGadget.{" "}
        </small>
      </div>

      <Formik
        initialValues={{
          username: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .email("Adresse e-mail invalide")
            .required("Email Obligatoire"),
        })}
        onSubmit={handleForgetPassword}
      >
        <Form className="mt-5 space-y-6">
          <div className="flex flex-col space-y-3 rounded-md shadow-sm">
            <Field
              type="text"
              name="username"
              placeholder="Votre email"
              // autoComplete="username"
              className="input"
            />
            <small className="text-red-600">
              <ErrorMessage name="username" />
            </small>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary group relative w-full"
            >
              Continuer
            </button>
          </div>

          <Link to="/login">
            <small className="mt-3  py-2 text-third-dark text-right ">
              Aller à la page de connexion.
            </small>
          </Link>

          {/* {errorLog && (
            <div className="flex justify-center">
              <small className="text-sm italic text-red-600">
                Identifiant/Mot de passe incorrect(s)
              </small>
            </div>
          )} */}
        </Form>
      </Formik>
    </div>
  );
};

export default ForgetPassword;

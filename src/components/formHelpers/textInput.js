import React from "react";
// import { signUpValidation, normalizePhone, isUserExist } from "./validation";
import { Form, Message, } from "semantic-ui-react";
import "./formstyle.css";

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  errorMsg,
  labelStyle,
  inputType = "text",
  placeholder,
  meta: { touched, error },
  ...custom
}) => (
  <div style={containerStyle} className="inputWrapper">
    <Form.Field>
      <label>{label}</label>
      {inputType !== "textarea" ? (
        <input
          type={inputType}
          placeholder={placeholder}
          {...input}
          {...custom}
        />
      ) : (
        <Form.TextArea placeholder={placeholder} {...input} {...custom} />
      )}
    </Form.Field>

    {error &&
      touched && (
        <Message color="red" size="mini">
          {error}
        </Message>
      )}
  </div>
);

export default TextInputWithValidations;

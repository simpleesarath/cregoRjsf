import React from "react";
import Form from "@rjsf/core";
import loanSchema from "./loanSchema.json";  // Import the schema
import validator from "@rjsf/validator-ajv8";  // Import the default validator
import  "./App.css"

const LoanApplicationForm = () => {
  const onSubmit = ({ formData }) => {
    console.log("Form data submitted: ", formData);
  };

  return (
    <div>
      <h1>Loan Application Form</h1>
      <Form
        schema={loanSchema}  // Your schema
        onSubmit={onSubmit}
        validator={validator}  // Pass the default AJV validator
        liveValidate={true}  // Enable live validation
      />
    </div>
  );
};

export default LoanApplicationForm;

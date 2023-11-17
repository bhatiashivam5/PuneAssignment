"use client";
import React from "react";
import { NextPage } from "next";
import FormBuilder from "@/Components/FormComponent/formComponent";
import { Heading } from "@chakra-ui/react";
const FormPage: NextPage = () => {
  return (
    <div>
      <Heading size="lg" fontSize="1.5rem" textAlign="center" padding="1rem">
        Dynamic Form Generator
      </Heading>

      <FormBuilder />
    </div>
  );
};

export default FormPage;

import React, { useState } from "react";
import {
  FormField,
  buttonData,
  dropdownOptions,
  genderOptions,
} from "../FormTypes/formTypes";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "next/image";

const employeeSchema = yup.object().shape({
  emp_name: yup.string().required("Name is required").min(5),
  address: yup.string().required("Address is required"),
  work_type: yup.string().required("Type is required"),
  gender: yup.string().required("Gender is required"),
});
const FormBuilder: React.FC = () => {
  const [formFields, setFormFields] = useState<FormField[]>([]);

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    validationSchema: employeeSchema,
    initialValues: {
      emp_name: "",
      address: "",
      work_type: "",
      gender: "",
      terms_conditions: false,
    },
    onSubmit: (values) => {
      // Save JSON data to localStorage
      const jsonData = { key: values };
      localStorage.setItem("empData", JSON.stringify(jsonData));
    },
  });

  const addField = (type: string) => {
    const newField: FormField = {
      id: Math.random().toString(36).substring(7),
      label: "",
      type,
      options: type === "dropdown" ? [] : undefined,
    };
    setFormFields([...formFields, newField]);
  };

  const removeField = (id: string) => {
    const updatedFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFields);
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "main main"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="auto"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <Flex gap={4}>
          {buttonData?.length > 0 &&
            buttonData?.map((item) => (
              <Button
                colorScheme="purple"
                onClick={() => addField(item?.type)}
                key={item?.id}
                size="sm"
              >
                {item?.text}
              </Button>
            ))}
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"main"} m="0 4rem">
        <Card maxW="2xl">
          {/* <CardHeader>
            <Image src="/emp.jpg" alt="comvision" height={40} width={600} />
          </CardHeader> */}
          <CardBody>
            <Flex flexDirection="column" gap={2}>
              {formFields.map((field) => (
                <Box key={field.id}>
                  {field?.type === "text" && (
                    <FormControl>
                      <FormLabel>Employee Name</FormLabel>
                      <Flex alignItems="center" gap={2}>
                        <Input
                          type="text"
                          name="emp_name"
                          value={values.emp_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          placeholder="Enter details here"
                          min={5}
                          required
                        />
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="purple"
                          aria-label="Done"
                          fontSize="16px"
                          icon={<DeleteIcon />}
                          onClick={() => removeField(field?.id)}
                        />
                      </Flex>
                      {errors.emp_name && touched.emp_name ? (
                        <Text as="span" className="form-label" color="red">
                          {errors.emp_name}
                        </Text>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  )}
                  {field?.type === "textarea" && (
                    <FormControl>
                      <FormLabel>Address</FormLabel>
                      <Flex alignItems="center" gap={2}>
                        <Textarea
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="form-control"
                          placeholder="Enter address here"
                          required
                        />
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="purple"
                          aria-label="Done"
                          fontSize="16px"
                          icon={<DeleteIcon />}
                          onClick={() => removeField(field?.id)}
                        />
                      </Flex>
                      {errors.address && touched.address ? (
                        <Text as="span" className="form-label" color="red">
                          {errors.address}
                        </Text>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  )}
                  {field?.type === "dropdown" && (
                    <FormControl>
                      <FormLabel>Work Type</FormLabel>
                      <Flex alignItems="center" gap={2}>
                        <Select
                          name="work_type"
                          value={values?.work_type}
                          placeholder="Select work type"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          {dropdownOptions?.length > 0 &&
                            dropdownOptions?.map((item) => (
                              <option value={item?.value} key={item?.key}>
                                {item?.text}
                              </option>
                            ))}
                        </Select>
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="purple"
                          aria-label="Done"
                          fontSize="16px"
                          icon={<DeleteIcon />}
                          onClick={() => removeField(field?.id)}
                        />
                      </Flex>
                      {errors.work_type && touched.work_type ? (
                        <Text as="span" className="form-label" color="red">
                          {errors.work_type}
                        </Text>
                      ) : (
                        ""
                      )}
                    </FormControl>
                  )}
                  
                  {field?.type === "radio" && (
                    <>
                      <Flex alignItems="center" gap={2}>
                        <RadioGroup>
                          <Stack direction="row">
                            {genderOptions?.length > 0 &&
                              genderOptions?.map((item) => (
                                <Radio
                                  key={item?.key}
                                  name="gender"
                                  value={item?.value}
                                  onChange={() => handleChange("gender")}
                                  colorScheme="purple"
                                >
                                  {item?.text}
                                </Radio>
                              ))}
                          </Stack>
                        </RadioGroup>
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="purple"
                          aria-label="Done"
                          fontSize="16px"
                          icon={<DeleteIcon />}
                          onClick={() => removeField(field?.id)}
                        />
                      </Flex>
                      {errors.gender ? (
                        <Text as="span" className="form-label" color="red">
                          {errors.gender}
                        </Text>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                  {field?.type === "checkbox" && (
                    <>
                      <Flex alignItems="center" gap={2}>
                        <Checkbox
                          colorScheme="purple"
                          name="terms_conditions"
                          onChange={handleChange}
                        >
                          Terms & Conditions
                        </Checkbox>
                        <IconButton
                          isRound={true}
                          variant="solid"
                          colorScheme="purple"
                          aria-label="Done"
                          fontSize="16px"
                          icon={<DeleteIcon />}
                          onClick={() => removeField(field?.id)}
                        />
                      </Flex>
                    </>
                  )}
                </Box>
              ))}
            </Flex>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button
              colorScheme="purple"
              size="sm"
              onClick={() => handleSubmit()}
              mt="2rem"
            >
              Save Data
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default FormBuilder;

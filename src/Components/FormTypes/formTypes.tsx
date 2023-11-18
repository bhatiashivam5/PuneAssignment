// export type FieldType = 'text' | 'textarea' | 'dropdown' | 'checkbox' | 'radio'
export interface FormField {
  id: string;
  label: string;
  type: string;
  options?: string[];
}

export const dropdownOptions = [
  { key: 1, value: "hybrid", text: "Hybrid" },
  { key: 2, value: "wfh", text: "Work from Home" },
  { key: 3, value: "wfo", text: "Work from Office" },
];

export const genderOptions = [
  { key: 1, value: "male", text: "Male" },
  { key: 2, value: "female", text: "Female" },
  { key: 3, value: "other", text: "Other" },
];


export const buttonData = [
  {
    id: 1,
    text: "Add Text Input",
    type: "text",
  },
  {
    id: 2,
    text: "Add Text Area",
    type: "textarea",
  },
  {
    id: 3,
    text: "Add Text Dropdown",
    type: "dropdown",
  },
  {
    id: 4,
    text: "Add Radio Button",
    type: "radio",
  },
  {
    id: 5,
    text: "Add Checkbox",
    type: "checkbox",
  },
];

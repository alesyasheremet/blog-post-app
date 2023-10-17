// BlogPostSubmitForm.tsx

import React, { useState } from "react";
import InputText from "./InputText";
import TextArea from "./TextArea";
import Dropdown from "./DropDown";
import { Button } from "./Button";

interface BlogPostSubmitFormProps {
  onSubmit: (formData: FormValues) => void;
}

interface FormValues {
  textField1: string;
  textField2: string;
  textArea: string;
  dropdown: string;
}

const BlogPostSubmitForm: React.FC<BlogPostSubmitFormProps> = ({
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormValues>({
    textField1: "",
    textField2: "",
    textArea: "",
    dropdown: "",
  });

  const handleInputChange = (value: string) => void {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button label="sdf" backgroundColor="orange" />
    </form>
  );
};

export default BlogPostSubmitForm;

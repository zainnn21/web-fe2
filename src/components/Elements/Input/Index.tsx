import Input from "./Input";
import Label from "./Label";

type InputFormProps = {
  name?: string;
  placeholder: string;
  label?: string;
  type: string;
};
const InputForm = ({ name, placeholder, label, type }: InputFormProps) => {
  return (
    <div className="flex flex-col">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;

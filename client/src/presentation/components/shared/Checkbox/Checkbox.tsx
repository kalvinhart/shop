import { CheckboxBox, CheckboxLabel, CheckboxUI } from "./Checkbox.styles";

type CheckboxProps = {
  label: string;
  onChange: () => void;
};

const Checkbox = ({ label, onChange }: CheckboxProps) => {
  return (
    <CheckboxLabel>
      {label}
      <CheckboxBox type="checkbox" />
      <CheckboxUI />
    </CheckboxLabel>
  );
};

export default Checkbox;

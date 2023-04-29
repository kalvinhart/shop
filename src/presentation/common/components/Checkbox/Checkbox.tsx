import { CheckboxBox, CheckboxLabel, CheckboxUI } from "./Checkbox.styles";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange: (e: React.SyntheticEvent) => void;
};

const Checkbox = ({ label, checked = false, onChange }: CheckboxProps) => {
  return (
    <CheckboxLabel>
      {label}
      <CheckboxBox type="checkbox" checked={checked} onChange={onChange} />
      <CheckboxUI />
    </CheckboxLabel>
  );
};

export default Checkbox;

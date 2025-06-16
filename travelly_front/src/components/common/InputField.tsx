interface InputFieldProps {
  type: string;
  placeholder?: string;
  disabled?: boolean;
  inputStyle?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <input
      className={`bg-white rounded-2xl border border-point placeholder-point ${props.inputStyle}`}
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputField;

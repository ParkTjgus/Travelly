interface ButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  buttonStyle?: string;
  disabled?: boolean;
  onActionClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-2xl ${props.buttonStyle}`}
      type={props.type}
      onClick={props.onActionClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;

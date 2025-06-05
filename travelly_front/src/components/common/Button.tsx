import type { IconProps } from "./Icon";
import Icon from "./Icon";

interface ButtonIconProps extends IconProps {
  location: "left" | "right";
}

interface ButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  buttonStyle?: string;
  disabled?: boolean;
  onActionClick?: () => void;
  icon?: ButtonIconProps;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`rounded-2xl ${props.buttonStyle}`}
      type={props.type}
      onClick={props.onActionClick}
      disabled={props.disabled}
    >
      {props.icon?.location === "left" && (
        <Icon
          iconName={props.icon.iconName}
          size={props.icon.size}
          color={props.icon.color}
        />
      )}
      {props.label}
      {props.icon?.location === "right" && (
        <Icon
          iconName={props.icon.iconName}
          size={props.icon.size}
          color={props.icon.color}
        />
      )}
    </button>
  );
};

export default Button;

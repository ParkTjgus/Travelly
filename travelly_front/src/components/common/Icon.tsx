import type { IconType } from "react-icons";
import * as Octicons from "react-icons/go";

export interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
}

const IconList: Record<string, keyof typeof Octicons> = {
  email: "GoMail",
};

const Icon = (props: IconProps) => {
  const iconName = IconList[props.iconName];
  let IconComponent: IconType | undefined = Octicons[iconName];

  if (!IconComponent) return null;

  return <IconComponent size={props.size} color={props.color} />;
};

export default Icon;

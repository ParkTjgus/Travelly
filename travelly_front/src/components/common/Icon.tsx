import type { IconType } from "react-icons";
import * as Fa6Icons from "react-icons/fa6";

export interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
}

const IconList: Record<string, keyof typeof Fa6Icons> = {};

const Icon = (props: IconProps) => {
  const iconName = IconList[props.iconName];
  let IconComponent: IconType | undefined = Fa6Icons[iconName];

  if (!IconComponent) return null;

  return <IconComponent size={props.size} color={props.color} />;
};

export default Icon;

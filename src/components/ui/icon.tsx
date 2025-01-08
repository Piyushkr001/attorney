"use client";
import * as PhosphorIcons from "@phosphor-icons/react";
import { icons as LucideIcons } from "lucide-react";

interface LucideProps {
  provider: "lucide";
  name: keyof typeof LucideIcons;
}

interface PhosphorProps {
  provider: "phosphor";
  name: keyof typeof PhosphorIcons;
}

interface IconProps {
  color?: string; // Optional color prop, string for hex or named colors
  size?: number | string; // Optional size prop, number or string for flexibility
  className?: string;
}

const Icon = ({
  name,
  provider,
  color,
  size,
  ...rest
}: IconProps & (LucideProps | PhosphorProps)) => {
  const IIcon = (
    provider === "lucide" ? LucideIcons[name] : PhosphorIcons[name]
  ) as React.ElementType;

  if (!IIcon) {
    throw new Error(`Icon "${name}" is not available.`);
  }

  return <IIcon color={color} size={size} {...rest} />;
};

// Icon.defaultProps = {
//   provider: "phosphor",
// };

export type IconName = LucideProps | PhosphorProps;

export { Icon };

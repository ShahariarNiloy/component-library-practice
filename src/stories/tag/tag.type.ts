import { ReactNode } from "react";

export type size = "sm" | "md" | "lg";
export type variant = "solid" | "outlined" | "shadow" | "plain";
export type color =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";
export type iconPosition = "top" | "bottom" | "left" | "right";
export type radius = "none" | "sm" | "md" | "lg" | "full";

export interface ITag {
  label?: string;
  size?: size;
  variant?: variant;
  color?: color;
  prefix?: ReactNode;
  suffix?: ReactNode;
  icon?: ReactNode;
  iconPosition?: iconPosition;
  radius?: radius;
}

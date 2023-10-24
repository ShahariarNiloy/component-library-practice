import { FC } from "react";
import { ITag } from "./tag.type";
import styles from "./tag.module.scss";

export const Tag: FC<ITag> = ({
  label = "Tag",
  variant = "solid",
  color = "default",
  size = "md",
  radius = "full",
  icon = "",
  iconPosition = "left",
}) => {
  const tagClassName = styles[`tag`];
  const variantAndColorClassName = styles[`tag--${variant}--${color}`];
  const sizeClassName = styles[`tag-size--${size}`];
  const radiusClassName = styles[`tag-radius--${radius}`];
  const iconClassName = icon
    ? styles[`tag-icon-position--${iconPosition}`]
    : "";
  return (
    <div
      className={[
        tagClassName,
        variantAndColorClassName,
        sizeClassName,
        radiusClassName,
        iconClassName,
      ].join(" ")}
    >
      {icon === "" ? null : icon}

      <span>{label}</span>
    </div>
  );
};

import React from "react";
import { GlobalTypography } from "../../Atoms/typography/typography";
import { BlogCardComponent } from "./BlogCard";

export default {
  title: "BlogCard",
};

export const CardComponents = () => (
  <>
    <GlobalTypography />
    <BlogCardComponent />
  </>
);

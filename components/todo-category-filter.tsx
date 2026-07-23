"use client";

import { CATEGORY_FILTERS, type CategoryFilter } from "@/lib/types";
import { RadioButtonGroup } from "@/components/radio-button-group";

interface TodoCategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function TodoCategoryFilter({
  value,
  onChange,
}: TodoCategoryFilterProps) {
  return (
    <RadioButtonGroup
      value={value}
      onChange={onChange}
      options={CATEGORY_FILTERS}
      ariaLabel="카테고리 필터"
    />
  );
}

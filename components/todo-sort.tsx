"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { RadioButtonGroup } from "@/components/radio-button-group";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <RadioButtonGroup
      value={value}
      onChange={onChange}
      options={SORT_OPTIONS}
      ariaLabel="정렬"
    />
  );
}

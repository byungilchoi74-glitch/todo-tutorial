"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { RadioButtonGroup } from "@/components/radio-button-group";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <RadioButtonGroup
      value={value}
      onChange={onChange}
      options={TODO_FILTERS}
      ariaLabel="필터"
    />
  );
}

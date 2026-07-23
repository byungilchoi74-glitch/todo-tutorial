"use client";

import { Button } from "@/components/ui/button";

interface RadioButtonGroupOption<T extends string> {
  value: T;
  label: string;
}

interface RadioButtonGroupProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: readonly RadioButtonGroupOption<T>[];
  ariaLabel: string;
}

export function RadioButtonGroup<T extends string>({
  value,
  onChange,
  options,
  ariaLabel,
}: RadioButtonGroupProps<T>) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} className="flex gap-1">
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}

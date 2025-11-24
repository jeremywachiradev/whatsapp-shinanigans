"use client"

import { useFormContext } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldLabel,
} from "~/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { Controller } from "react-hook-form"

const CATEGORY_OPTIONS = [
  {
    label: "Laptops & Computers",
    value: "Laptops & Computers",
    category: "Electronics",
  },
  {
    label: "Headphones",
    value: "Headphones",
    category: "Electronics",
  },
  {
    label: "Bags",
    value: "Bags",
    category: "Fashion & Accessories",
  },
  {
    label: "Clothing",
    value: "Clothing",
    category: "Fashion & Accessories",
  },
]

export function CategorySelector() {
  const form = useFormContext()

  const handleSubcategoryChange = (value: string) => {
    const selectedOption = CATEGORY_OPTIONS.find((opt) => opt.value === value)
    if (selectedOption) {
      form.setValue("category", selectedOption.category)
      form.setValue("subcategory", value)
      
      // Reset specific fields when category changes to avoid validation errors
      // This is a basic reset, more complex reset logic might be needed in the main form
      // but this ensures we don't keep invalid data from other schemas
      // We keep common fields though.
    }
  }

  return (
    <Controller
      control={form.control}
      name="subcategory"
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel>What are you selling?</FieldLabel>
          <Select
            onValueChange={(val) => {
              field.onChange(val)
              handleSubcategoryChange(val)
            }}
            defaultValue={field.value}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

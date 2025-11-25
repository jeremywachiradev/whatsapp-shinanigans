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

const CATEGORIES = [
  "Electronics",
  "Fashion & Accessories",
] as const

const SUBCATEGORIES = {
  "Electronics": [
    { label: "Laptops & Computers", value: "Laptops & Computers" },
    { label: "Headphones", value: "Headphones" },
  ],
  "Fashion & Accessories": [
    { label: "Bags", value: "Bags" },
    { label: "Clothing", value: "Clothing" },
  ],
}

export function CategorySelector() {
  const form = useFormContext()
  const category = form.watch("category")

  const handleCategoryChange = (value: string) => {
    form.setValue("category", value)
    form.setValue("subcategory", "") // Reset subcategory when category changes
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Category Selection */}
      <Controller
        control={form.control}
        name="category"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Category</FieldLabel>
            <Select
              onValueChange={(val) => {
                field.onChange(val)
                handleCategoryChange(val)
              }}
              value={field.value || ""}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Subcategory Selection */}
      <Controller
        control={form.control}
        name="subcategory"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Subcategory</FieldLabel>
            <Select
              onValueChange={field.onChange}
              value={field.value || ""}
              disabled={!category}
            >
              <SelectTrigger>
                <SelectValue placeholder={category ? "Select subcategory" : "Select category first"} />
              </SelectTrigger>
              <SelectContent>
                {category && SUBCATEGORIES[category as keyof typeof SUBCATEGORIES]?.map((option) => (
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
    </div>
  )
}

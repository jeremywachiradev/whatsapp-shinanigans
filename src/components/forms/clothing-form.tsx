"use client"

import { useFormContext, useWatch } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "~/components/ui/input-group"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"
import { Controller } from "react-hook-form"
import {
  ClothingBrandEnum,
  ClothingTypeEnum,
  ClothingGenderEnum,
  ConditionEnum,
} from "~/lib/validations/product-schema"

export function ClothingForm() {
  const form = useFormContext()
  const hasWarranty = useWatch({ control: form.control, name: "hasWarranty" })

  return (
    <FieldGroup>
      {/* Brand */}
      <Controller
        control={form.control}
        name="brand"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Brand</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {ClothingBrandEnum.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Type */}
      <Controller
        control={form.control}
        name="type"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Type</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {ClothingTypeEnum.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Gender */}
      <Controller
        control={form.control}
        name="gender"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Gender</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                {ClothingGenderEnum.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Condition */}
      <Controller
        control={form.control}
        name="condition"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Condition</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {ConditionEnum.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Color */}
      <Controller
        control={form.control}
        name="color"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Color</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. Blue" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Made In Kenya */}
      <Controller
        control={form.control}
        name="madeInKenya"
        render={({ field }) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="madeInKenya"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <Label htmlFor="madeInKenya">Made in Kenya</Label>
          </div>
        )}
      />

      {/* Warranty */}
      <Controller
        control={form.control}
        name="hasWarranty"
        render={({ field }) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasWarranty"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <Label htmlFor="hasWarranty">Has Warranty</Label>
          </div>
        )}
      />

      {/* Warranty Period (Conditional) */}
      {hasWarranty && (
        <Controller
          control={form.control}
          name="warrantyPeriodDays"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Warranty Period (Days)</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type="number"
                  placeholder="e.g. 365"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
                <InputGroupAddon>
                  <InputGroupText>Days</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      )}
    </FieldGroup>
  )
}

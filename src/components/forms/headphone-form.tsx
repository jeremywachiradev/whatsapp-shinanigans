"use client"

import { useFormContext } from "react-hook-form"
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
  HeadphoneBrandEnum,
  HeadphoneTypeEnum,
  HeadphoneFormFactorEnum,
  HeadphoneConnectivityEnum,
  HeadphoneFeatureEnum,
  ConditionEnum,
} from "~/lib/validations/product-schema"

export function HeadphoneForm() {
  const form = useFormContext()

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
                {HeadphoneBrandEnum.options.map((opt) => (
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
                {HeadphoneTypeEnum.options.map((opt) => (
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

      {/* Form Factor */}
      <Controller
        control={form.control}
        name="formFactor"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Form Factor</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select form factor" />
              </SelectTrigger>
              <SelectContent>
                {HeadphoneFormFactorEnum.options.map((opt) => (
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

      {/* Connectivity */}
      <Controller
        control={form.control}
        name="connectivity"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Connectivity</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select connectivity" />
              </SelectTrigger>
              <SelectContent>
                {HeadphoneConnectivityEnum.options.map((opt) => (
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

      {/* Resistance */}
      <Controller
        control={form.control}
        name="resistance"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Resistance (Ohms)</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 32" />
              <InputGroupAddon>
                <InputGroupText>Ω</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
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
              <InputGroupInput {...field} placeholder="e.g. Black" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Features */}
      <Controller
        control={form.control}
        name="features"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Features</FieldLabel>
            <div className="grid grid-cols-2 gap-4">
              {HeadphoneFeatureEnum.options.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature}`}
                    checked={field.value?.includes(feature)}
                    onCheckedChange={(checked) => {
                      const current = field.value || []
                      if (checked) {
                        field.onChange([...current, feature])
                      } else {
                        field.onChange(current.filter((val: string) => val !== feature))
                      }
                    }}
                  />
                  <Label htmlFor={`feature-${feature}`}>
                    {feature.replace(/_/g, " ")}
                  </Label>
                </div>
              ))}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  )
}

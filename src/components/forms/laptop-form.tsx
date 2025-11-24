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
import { Controller } from "react-hook-form"
import {
  ComputerTypeEnum,
  LaptopBrandEnum,
  LaptopSubtypeEnum,
  DesktopSubtypeEnum,
  ServerSubtypeEnum,
  ConditionEnum,
  StorageTypeEnum,
  OperatingSystemEnum,
} from "~/lib/validations/product-schema"

export function LaptopForm() {
  const form = useFormContext()
  const type = useWatch({ control: form.control, name: "type" })

  return (
    <FieldGroup>
      {/* Computer Type */}
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
                {ComputerTypeEnum.options.map((opt) => (
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
                {LaptopBrandEnum.options.map((opt) => (
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

      {/* Dynamic Subtype */}
      {type === "LAPTOP" && (
        <Controller
          control={form.control}
          name="laptopSubtype"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Laptop Subtype</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subtype" />
                </SelectTrigger>
                <SelectContent>
                  {LaptopSubtypeEnum.options.map((opt) => (
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
      )}

      {type === "DESKTOP" && (
        <Controller
          control={form.control}
          name="desktopSubtype"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Desktop Subtype</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subtype" />
                </SelectTrigger>
                <SelectContent>
                  {DesktopSubtypeEnum.options.map((opt) => (
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
      )}

      {type === "SERVER" && (
        <Controller
          control={form.control}
          name="serverSubtype"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Server Subtype</FieldLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subtype" />
                </SelectTrigger>
                <SelectContent>
                  {ServerSubtypeEnum.options.map((opt) => (
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
      )}

      {/* Model */}
      <Controller
        control={form.control}
        name="model"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Model</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. MacBook Pro M1" />
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

      {/* Processor */}
      <Controller
        control={form.control}
        name="processorType"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Processor Type</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. Intel Core i7" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Cores */}
      <Controller
        control={form.control}
        name="numberOfCores"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Number of Cores</FieldLabel>
            <InputGroup>
              <InputGroupInput
                {...field}
                type="number"
                placeholder="e.g. 8"
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* RAM */}
      <Controller
        control={form.control}
        name="ram"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>RAM</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 16GB" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Storage Capacity */}
      <Controller
        control={form.control}
        name="storageCapacity"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Storage Capacity</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 512GB" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Storage Type */}
      <Controller
        control={form.control}
        name="storageType"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Storage Type</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select storage type" />
              </SelectTrigger>
              <SelectContent>
                {StorageTypeEnum.options.map((opt) => (
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

      {/* Display Size */}
      <Controller
        control={form.control}
        name="displaySize"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Display Size (Optional)</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 15.6 inches" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Graphics Card */}
      <Controller
        control={form.control}
        name="graphicsCard"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Graphics Card (Optional)</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. NVIDIA RTX 3060" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Graphics Memory */}
      <Controller
        control={form.control}
        name="graphicsCardMemory"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Graphics Card Memory (Optional)</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 6GB" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* OS */}
      <Controller
        control={form.control}
        name="operatingSystem"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Operating System</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select OS" />
              </SelectTrigger>
              <SelectContent>
                {OperatingSystemEnum.options.map((opt) => (
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
              <InputGroupInput {...field} placeholder="e.g. Silver" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </FieldGroup>
  )
}

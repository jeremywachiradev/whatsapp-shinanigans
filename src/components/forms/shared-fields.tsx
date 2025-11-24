import { useFormContext, Controller } from "react-hook-form"
import { 
  ExchangePossibleEnum, 
  OpenToNegotiationEnum 
} from "~/lib/validations/product-schema"
import { 
  Field, 
  FieldGroup, 
  FieldLabel, 
  FieldError 
} from "~/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "~/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"
import { Textarea } from "~/components/ui/textarea"
import FileUpload from "~/components/kokonutui/file-upload"

export function SharedFields() {
  const form = useFormContext()

  return (
    <FieldGroup>
      {/* Exchange Possible */}
      <Controller
        control={form.control}
        name="exchangePossible"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Exchange Possible?</FieldLabel>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-row space-x-4"
            >
              {ExchangePossibleEnum.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`exchange-${option}`} />
                  <Label htmlFor={`exchange-${option}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Description */}
      <Controller
        control={form.control}
        name="description"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Description</FieldLabel>
            <Textarea 
              {...field} 
              placeholder="Describe your item in detail..." 
              className="min-h-[100px]"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Price */}
      <Controller
        control={form.control}
        name="price"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Price (KSH)</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>KSH</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput {...field} placeholder="e.g. 50000" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Open to Negotiation */}
      <Controller
        control={form.control}
        name="openToNegotiation"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Open to Negotiation?</FieldLabel>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-row space-x-4"
            >
              {OpenToNegotiationEnum.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`negotiation-${option}`} />
                  <Label htmlFor={`negotiation-${option}`}>
                    {option.replace(/_/g, " ")}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Phone Number */}
      <Controller
        control={form.control}
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Phone Number</FieldLabel>
            <InputGroup>
              <InputGroupInput {...field} placeholder="e.g. 0712345678" />
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      {/* Dummy File Upload */}
      <Field>
        <FieldLabel>Product Image (Upload Disabled)</FieldLabel>
        <div className="relative">
          <div className="pointer-events-none opacity-50 grayscale">
            <FileUpload />
          </div>
          <p className="mt-2 text-sm text-muted-foreground italic">
            This field is disabled because you get the point... ( server yetu ni actually just a potato connected to the internet). 
            Describe your item vividly instead 🥔
          </p>
        </div>
      </Field>

    </FieldGroup>
  )
}

import { useFormContext, Controller } from "react-hook-form"
import { 
  KenyanCountyEnum, 
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "~/components/ui/input-group"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"

export function SharedFields() {
  const form = useFormContext()

  return (
    <FieldGroup>
      {/* Location */}
      <Controller
        control={form.control}
        name="location"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Location (County)</FieldLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a county" />
              </SelectTrigger>
              <SelectContent>
                {KenyanCountyEnum.options.map((county) => (
                  <SelectItem key={county} value={county}>
                    {county.replace(/_/g, " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

      {/* Dummy File Upload */}
      <Field>
        <FieldLabel>Product Image (Upload Disabled)</FieldLabel>
        <div className="relative">
          <InputGroup>
            <InputGroupInput 
              type="file" 
              disabled 
              className="cursor-not-allowed opacity-50"
            />
          </InputGroup>
          <p className="mt-2 text-sm text-muted-foreground italic">
            This field is disabled because we don't have enough storage space on our server (it's actually just a potato connected to the internet). 
            Please describe your item vividly instead! 🥔
          </p>
        </div>
      </Field>

    </FieldGroup>
  )
}

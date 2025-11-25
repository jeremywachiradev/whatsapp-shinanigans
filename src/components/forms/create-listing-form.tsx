"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider, Controller } from "react-hook-form"
import { toast } from "sonner"
import { createProduct } from "~/app/actions"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { 
  Field,
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
import { Input } from "~/components/ui/input"
import { productSchema, type ProductFormValues, KenyanCountyEnum } from "~/lib/validations/product-schema"
import { CategorySelector } from "./category-selector"
import { SharedFields } from "./shared-fields"
import { LaptopForm } from "./laptop-form"
import { HeadphoneForm } from "./headphone-form"
import { BagForm } from "./bag-form"
import { ClothingForm } from "./clothing-form"
import { Loader2 } from "lucide-react"

import { useRouter } from "next/navigation"

export function CreateListingForm() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      category: "",
      subcategory: "",
      location: "",
      exchangePossible: "NO",
      openToNegotiation: "NOT_SURE",
      type: "",
      condition: "",
      processorType: "",
      numberOfCores: 4,
      ram: "",
      storageCapacity: "",
      storageType: "SSD",
      operatingSystem: "WINDOWS_11",
      color: "",
      description: "",
      price: "",
      phoneNumber: "",
      // Dynamic fields defaults
      brand: "",
      laptopSubtype: "",
      desktopSubtype: "",
      serverSubtype: "",
      model: "",
      displaySize: "",
      graphicsCard: "",
      graphicsCardMemory: "",
      formFactor: "",
      connectivity: "",
      resistance: "",
      features: [] as any,
      gender: "",
      madeInKenya: false as any,
      hasWarranty: false as any,
      warrantyPeriodDays: undefined,
    } as any,
    mode: "onChange",
  })

  const subcategory = form.watch("subcategory")
  const [isPending, startTransition] = React.useTransition()

  function onSubmit(data: ProductFormValues) {
    startTransition(async () => {
      const result = await createProduct(data)
      
      if (result.success) {
        toast.success(result.message)
        if (result.id) {
          router.push(`/products/${result.id}`)
        } else {
          form.reset()
        }
      } else {
        toast.error(result.message)
      }
    })
  }

  function onError(errors: any) {
    toast.error("Please check the form for errors.")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Listing</CardTitle>
        <CardDescription>
          Fill in the details below to list your item for sale.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...form}>
          <form id="create-listing-form" onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-8">
            
            {/* 1. Title - Always at the top */}
            <Controller
              control={form.control}
              name="title"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Title</FieldLabel>
                  <Input {...field} placeholder="e.g. MacBook Pro M1 2020" />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* 2. Category & Subcategory Selection */}
            <CategorySelector />

            {/* 3. Location - After Category/Subcategory */}
            <Controller
              control={form.control}
              name="location"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Location (County)</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
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

            {/* 4. Dynamic Sub-forms */}
            {subcategory === "Laptops & Computers" && <LaptopForm />}
            {subcategory === "Headphones" && <HeadphoneForm />}
            {subcategory === "Bags" && <BagForm />}
            {subcategory === "Clothing" && <ClothingForm />}

            {/* 5. Shared Fields (Description, Price, etc.) - Always at the bottom */}
            <SharedFields />

          </form>
        </FormProvider>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" onClick={() => form.reset()} disabled={isPending}>
            Reset
          </Button>
          <Button type="submit" form="create-listing-form" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isPending ? "Creating..." : "Create Listing"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
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
import { Field } from "~/components/ui/field"
import { productSchema, type ProductFormValues } from "~/lib/validations/product-schema"
import { CategorySelector } from "./category-selector"
import { SharedFields } from "./shared-fields"
import { LaptopForm } from "./laptop-form"
import { HeadphoneForm } from "./headphone-form"
import { BagForm } from "./bag-form"
import { ClothingForm } from "./clothing-form"

export function CreateListingForm() {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      category: "Electronics",
      subcategory: "Laptops & Computers",
      exchangePossible: "NO",
      openToNegotiation: "NOT_SURE",
      type: "LAPTOP", 
    },
    mode: "onChange",
  })

  const subcategory = form.watch("subcategory")

  const [isPending, startTransition] = React.useTransition()

  function onSubmit(data: ProductFormValues) {
    startTransition(async () => {
      const result = await createProduct(data)
      
      if (result.success) {
        toast.success(result.message)
        form.reset()
      } else {
        toast.error(result.message)
      }
    })
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
          <form id="create-listing-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Category Selection - Always at the top */}
            <CategorySelector />

            {/* Dynamic Sub-forms */}
            {subcategory === "Laptops & Computers" && <LaptopForm />}
            {subcategory === "Headphones" && <HeadphoneForm />}
            {subcategory === "Bags" && <BagForm />}
            {subcategory === "Clothing" && <ClothingForm />}

            {/* Shared Fields - Always at the bottom */}
            <SharedFields />

          </form>
        </FormProvider>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="w-full justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => form.reset()} disabled={isPending}>
            Reset
          </Button>
          <Button type="submit" form="create-listing-form" disabled={isPending}>
            {isPending ? "Creating..." : "Create Listing"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}

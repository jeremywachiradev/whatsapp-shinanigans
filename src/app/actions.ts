"use server"

import { db } from "~/server/db"
import { productSchema, type ProductFormValues } from "~/lib/validations/product-schema"
import { revalidatePath } from "next/cache"
import { auth } from "~/server/better-auth/config"
import { headers } from "next/headers"

export async function createProduct(data: ProductFormValues) {
  try {
    // 1. Validate data on the server
    const validatedData = productSchema.parse(data)

    // 2. Get the current session
    const session = await auth.api.getSession({
      headers: await headers(),
    })

    if (!session) {
      return { success: false, message: "You must be logged in to create a listing." }
    }

    const userId = session.user.id

    // 3. Create the product based on subcategory
    // We extract common fields first
    const commonFields = {
      title: validatedData.title,
      category: validatedData.category,
      subcategory: validatedData.subcategory,
      location: validatedData.location,
      description: validatedData.description,
      price: validatedData.price,
      phoneNumber: validatedData.phoneNumber,
      exchangePossible: validatedData.exchangePossible,
      openToNegotiation: validatedData.openToNegotiation,
      createdById: userId,
      color: validatedData.color,
      condition: validatedData.condition,
    }

    if (validatedData.subcategory === "Laptops & Computers") {
      await db.laptopComputer.create({
        data: {
          ...commonFields,
          subcategory: validatedData.subcategory,
          type: validatedData.type,
          brand: validatedData.brand,
          laptopSubtype: validatedData.type === "LAPTOP" ? validatedData.laptopSubtype : undefined,
          desktopSubtype: validatedData.type === "DESKTOP" ? validatedData.desktopSubtype : undefined,
          serverSubtype: validatedData.type === "SERVER" ? validatedData.serverSubtype : undefined,
          model: validatedData.model,
          processorType: validatedData.processorType,
          numberOfCores: validatedData.numberOfCores,
          ram: validatedData.ram,
          storageCapacity: validatedData.storageCapacity,
          storageType: validatedData.storageType,
          displaySize: validatedData.displaySize,
          graphicsCard: validatedData.graphicsCard,
          graphicsCardMemory: validatedData.graphicsCardMemory,
          operatingSystem: validatedData.operatingSystem,
        },
      })
    } else if (validatedData.subcategory === "Headphones") {
      await db.headphone.create({
        data: {
          ...commonFields,
          subcategory: validatedData.subcategory,
          brand: validatedData.brand,
          type: validatedData.type,
          formFactor: validatedData.formFactor,
          connectivity: validatedData.connectivity,
          resistance: validatedData.resistance,
          features: validatedData.features,
        },
      })
    } else if (validatedData.subcategory === "Bags") {
      await db.bag.create({
        data: {
          ...commonFields,
          subcategory: validatedData.subcategory,
          brand: validatedData.brand,
          gender: validatedData.gender,
          type: validatedData.type,
        },
      })
    } else if (validatedData.subcategory === "Clothing") {
      await db.clothing.create({
        data: {
          ...commonFields,
          subcategory: validatedData.subcategory,
          brand: validatedData.brand,
          type: validatedData.type,
          gender: validatedData.gender,
          madeInKenya: validatedData.madeInKenya,
          hasWarranty: validatedData.hasWarranty,
          warrantyPeriod: validatedData.warrantyPeriodDays?.toString(),
        },
      })
    }

    revalidatePath("/sell")
    return { success: true, message: "Listing created successfully!" }
  } catch (error) {
    console.error("Failed to create listing:", error)
    return { success: false, message: "Failed to create listing. Please try again." }
  }
}

export async function getAllProducts() {
  try {
    const [laptops, headphones, bags, clothing] = await Promise.all([
      db.laptopComputer.findMany({ orderBy: { createdAt: "desc" } }),
      db.headphone.findMany({ orderBy: { createdAt: "desc" } }),
      db.bag.findMany({ orderBy: { createdAt: "desc" } }),
      db.clothing.findMany({ orderBy: { createdAt: "desc" } }),
    ])

    // Combine and sort by date
    const allProducts = [
      ...laptops.map((p) => ({ ...p, type: "LaptopComputer" as const })),
      ...headphones.map((p) => ({ ...p, type: "Headphone" as const })),
      ...bags.map((p) => ({ ...p, type: "Bag" as const })),
      ...clothing.map((p) => ({ ...p, type: "Clothing" as const })),
    ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

    return allProducts
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return []
  }
}

export async function getProductById(id: string) {
  try {
    // Try to find in each category
    const laptop = await db.laptopComputer.findUnique({ where: { id } })
    if (laptop) return { ...laptop, type: "LaptopComputer" as const }

    const headphone = await db.headphone.findUnique({ where: { id } })
    if (headphone) return { ...headphone, type: "Headphone" as const }

    const bag = await db.bag.findUnique({ where: { id } })
    if (bag) return { ...bag, type: "Bag" as const }

    const clothing = await db.clothing.findUnique({ where: { id } })
    if (clothing) return { ...clothing, type: "Clothing" as const }

    return null
  } catch (error) {
    console.error("Failed to fetch product:", error)
    return null
  }
}

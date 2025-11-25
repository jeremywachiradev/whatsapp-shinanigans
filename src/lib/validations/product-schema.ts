import * as z from "zod"

// Enums matching Prisma schema
export const KenyanCountyEnum = z.enum([
  "BARINGO", "BOMET", "BUNGOMA", "BUSIA", "ELGEYO_MARAKWET", "EMBU", "GARISSA", "HOMA_BAY",
  "ISIOLO", "KAJIADO", "KAKAMEGA", "KERICHO", "KIAMBU", "KILIFI", "KIRINYAGA", "KISII",
  "KISUMU", "KITUI", "KWALE", "LAIKIPIA", "LAMU", "MACHAKOS", "MAKUENI", "MANDERA",
  "MARSABIT", "MERU", "MIGORI", "MOMBASA", "MURANG_A", "NAIROBI", "NAKURU", "NANDI",
  "NAROK", "NYAMIRA", "NYANDARUA", "NYERI", "SAMBURU", "SIAYA", "TAITA_TAVETA",
  "TANA_RIVER", "THARAKA_NITHI", "TRANS_NZOIA", "TURKANA", "UASIN_GISHU", "VIHIGA",
  "WAJIR", "WEST_POKOT"
])

export const ConditionEnum = z.enum(["BRAND_NEW", "USED", "REFURBISHED", "FOR_PARTS_OR_NOT_WORKING"])
export const ExchangePossibleEnum = z.enum(["YES", "NO"])
export const OpenToNegotiationEnum = z.enum(["YES", "NO", "NOT_SURE"])

// Laptops & Computers Enums
export const ComputerTypeEnum = z.enum(["LAPTOP", "DESKTOP", "SERVER"])
export const LaptopBrandEnum = z.enum(["APPLE", "ASUS", "ACER", "DELL", "HP", "LENOVO", "MSI", "RAZER", "SAMSUNG", "TOSHIBA", "OTHER"])
export const LaptopSubtypeEnum = z.enum(["GAMING_LAPTOP", "CHROMEBOOK", "TRADITIONAL_LAPTOP", "CONVERTIBLE_LAPTOP"])
export const DesktopSubtypeEnum = z.enum(["ALL_IN_ONE", "MINI_COMPACT", "THIN_CLIENT", "WORKSTATION"])
export const ServerSubtypeEnum = z.enum(["RACK", "TOWER"])
export const StorageTypeEnum = z.enum(["HDD", "SSD", "HYBRID", "EMMC", "NVME"])
export const OperatingSystemEnum = z.enum(["WINDOWS_11", "WINDOWS_10", "MACOS", "LINUX_UBUNTU", "LINUX_OTHER", "CHROME_OS", "DOS", "NO_OS", "OTHER"])

// Headphones Enums
export const HeadphoneBrandEnum = z.enum(["JBL", "LOGITECH", "ORAIMO", "SONY", "BOSE", "BEATS", "SENNHEISER", "AUDIO_TECHNICA", "SKULLCANDY", "APPLE", "SAMSUNG", "OTHER"])
export const HeadphoneTypeEnum = z.enum(["IN_EAR", "ON_EAR", "OVER_EAR"])
export const HeadphoneFormFactorEnum = z.enum(["EAR_HOOK", "HEADBAND", "IN_EAR_ONLY", "NECKBAND"])
export const HeadphoneConnectivityEnum = z.enum(["WIRED", "WIRELESS", "BOTH"])
export const HeadphoneFeatureEnum = z.enum(["ACTIVE_NOISE_CANCELLATION", "DETACHABLE_MICROPHONE", "WATERPROOF", "WIRELESS_CHARGING", "FAST_CHARGING", "VOICE_ASSISTANT", "FOLDABLE", "BASS_BOOST"])

// Bags Enums
export const BagBrandEnum = z.enum(["ALDO", "GENERIC", "HP", "LOUIS_VUITTON", "GUCCI", "PRADA", "NIKE", "ADIDAS", "SAMSONITE", "AMERICAN_TOURISTER", "OTHER"])
export const BagGenderEnum = z.enum(["MEN", "WOMEN", "UNISEX"])
export const BagTypeEnum = z.enum(["HANDBAG", "BACKPACK", "SHOULDER_BAG", "SUITCASE", "BRIEFCASE", "MESSENGER_BAG", "TOTE_BAG", "CLUTCH", "DUFFEL_BAG", "LAPTOP_BAG"])

// Clothing Enums
export const ClothingBrandEnum = z.enum(["ADIDAS", "NIKE", "PUMA", "ZARA", "H_AND_M", "GUCCI", "PRADA", "CALVIN_KLEIN", "TOMMY_HILFIGER", "LEVI_S", "ABC", "OTHER"])
export const ClothingTypeEnum = z.enum(["ACTIVEWEAR", "DRESSES", "SHIRTS", "SUITS", "JEANS", "TROUSERS", "SHORTS", "SKIRTS", "JACKETS", "COATS", "SWEATERS", "T_SHIRTS", "UNDERWEAR", "SLEEPWEAR"])
export const ClothingGenderEnum = z.enum(["MEN", "WOMEN", "UNISEX", "BOYS", "GIRLS"])

// Base Schema (Common Fields)
const baseSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(100),
  location: z.preprocess((val) => val === "" ? undefined : val, KenyanCountyEnum),
  exchangePossible: ExchangePossibleEnum,
  openToNegotiation: OpenToNegotiationEnum,
  description: z.string().min(20, "Description must be at least 20 characters"),
  price: z.string().min(1, "Price is required"), // Keeping as string as per requirement
  phoneNumber: z.string().min(10, "Phone number must be valid"),
})

// Category Specific Schemas
export const CategoryEnum = z.enum(["Electronics", "Fashion & Accessories"])

// Category Specific Schemas (Raw Objects for Discriminated Union)
const rawLaptopSchema = baseSchema.extend({
  category: z.preprocess((val) => val === "" ? undefined : val, CategoryEnum),
  subcategory: z.literal("Laptops & Computers"),
  type: z.preprocess((val) => val === "" ? undefined : val, ComputerTypeEnum),
  brand: z.preprocess((val) => val === "" ? undefined : val, LaptopBrandEnum),
  laptopSubtype: z.union([LaptopSubtypeEnum, z.literal("")]).optional(),
  desktopSubtype: z.union([DesktopSubtypeEnum, z.literal("")]).optional(),
  serverSubtype: z.union([ServerSubtypeEnum, z.literal("")]).optional(),
  model: z.string().optional(),
  condition: z.preprocess((val) => val === "" ? undefined : val, ConditionEnum),
  processorType: z.string().min(1, "Processor type is required"),
  numberOfCores: z.coerce.number().min(1),
  ram: z.string().min(1, "RAM is required"),
  storageCapacity: z.string().min(1, "Storage capacity is required"),
  storageType: StorageTypeEnum,
  displaySize: z.string().optional(),
  graphicsCard: z.string().optional(),
  graphicsCardMemory: z.string().optional(),
  operatingSystem: OperatingSystemEnum,
  color: z.string().min(1, "Color is required"),
})

const rawHeadphoneSchema = baseSchema.extend({
  category: z.preprocess((val) => val === "" ? undefined : val, CategoryEnum),
  subcategory: z.literal("Headphones"),
  brand: z.preprocess((val) => val === "" ? undefined : val, HeadphoneBrandEnum),
  type: z.preprocess((val) => val === "" ? undefined : val, HeadphoneTypeEnum),
  formFactor: z.preprocess((val) => val === "" ? undefined : val, HeadphoneFormFactorEnum),
  connectivity: z.preprocess((val) => val === "" ? undefined : val, HeadphoneConnectivityEnum),
  resistance: z.union([z.string(), z.literal("")]).optional(),
  color: z.string().min(1, "Color is required"),
  condition: z.preprocess((val) => val === "" ? undefined : val, ConditionEnum),
  features: z.array(HeadphoneFeatureEnum).default([]),
})

const rawBagSchema = baseSchema.extend({
  category: z.preprocess((val) => val === "" ? undefined : val, CategoryEnum),
  subcategory: z.literal("Bags"),
  brand: z.preprocess((val) => val === "" ? undefined : val, BagBrandEnum),
  gender: z.preprocess((val) => val === "" ? undefined : val, BagGenderEnum),
  type: z.preprocess((val) => val === "" ? undefined : val, BagTypeEnum),
  color: z.string().min(1, "Color is required"),
  condition: z.preprocess((val) => val === "" ? undefined : val, ConditionEnum),
})

const rawClothingSchema = baseSchema.extend({
  category: z.preprocess((val) => val === "" ? undefined : val, CategoryEnum),
  subcategory: z.literal("Clothing"),
  brand: z.preprocess((val) => val === "" ? undefined : val, ClothingBrandEnum),
  type: z.preprocess((val) => val === "" ? undefined : val, ClothingTypeEnum),
  gender: z.preprocess((val) => val === "" ? undefined : val, ClothingGenderEnum),
  color: z.string().min(1, "Color is required"),
  condition: z.preprocess((val) => val === "" ? undefined : val, ConditionEnum),
  madeInKenya: z.boolean().default(false),
  hasWarranty: z.boolean().default(false),
  warrantyPeriodDays: z.preprocess((val) => val === "" ? undefined : val, z.coerce.number().optional()),
})

// Export individual schemas with refinements for use in other places if needed
export const laptopComputerSchema = rawLaptopSchema.refine((data) => {
  if (data.type === "LAPTOP" && !data.laptopSubtype) return false;
  if (data.type === "DESKTOP" && !data.desktopSubtype) return false;
  if (data.type === "SERVER" && !data.serverSubtype) return false;
  return true;
}, {
  message: "Subtype is required for the selected computer type",
  path: ["type"],
});

export const headphoneSchema = rawHeadphoneSchema
export const bagSchema = rawBagSchema

export const clothingSchema = rawClothingSchema.refine((data) => {
  if (data.hasWarranty && !data.warrantyPeriodDays) return false;
  return true;
}, {
  message: "Warranty period is required if warranty is available",
  path: ["warrantyPeriodDays"],
})

// Union for the main form (using z.discriminatedUnion for better error handling)
// We use the RAW schemas here because discriminatedUnion requires ZodObject, not ZodEffects
const baseUnion = z.discriminatedUnion("subcategory", [
  rawLaptopSchema,
  rawHeadphoneSchema,
  rawBagSchema,
  rawClothingSchema,
])

// Apply refinements to the union
export const productSchema = baseUnion.superRefine((data, ctx) => {
  // 1. Consistency Check: Category must match Subcategory
  if (data.subcategory === "Laptops & Computers" || data.subcategory === "Headphones") {
    if (data.category !== "Electronics") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Category must be Electronics for this subcategory",
        path: ["category"],
      })
    }
  }
  if (data.subcategory === "Bags" || data.subcategory === "Clothing") {
    if (data.category !== "Fashion & Accessories") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Category must be Fashion & Accessories for this subcategory",
        path: ["category"],
      })
    }
  }

  // 2. Specific Validations
  if (data.subcategory === "Laptops & Computers") {
    if (data.type === "LAPTOP" && !data.laptopSubtype) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subtype is required for the selected computer type",
        path: ["laptopSubtype"], 
      })
    }
    if (data.type === "DESKTOP" && !data.desktopSubtype) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subtype is required for the selected computer type",
        path: ["desktopSubtype"],
      })
    }
    if (data.type === "SERVER" && !data.serverSubtype) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Subtype is required for the selected computer type",
        path: ["serverSubtype"],
      })
    }
  }

  if (data.subcategory === "Clothing") {
    if (data.hasWarranty && !data.warrantyPeriodDays) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Warranty period is required if warranty is available",
        path: ["warrantyPeriodDays"],
      })
    }
  }
})

export type ProductFormValues = z.infer<typeof productSchema>

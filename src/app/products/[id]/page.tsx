import { notFound } from "next/navigation"
import { getProductById } from "~/app/actions"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"
import { ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"

interface ProductDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2 pl-0 hover:pl-0 hover:bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Main Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge>{product.category}</Badge>
              <Badge variant="outline">{product.subcategory}</Badge>
              <Badge variant="secondary">{product.condition.replace(/_/g, " ")}</Badge>
            </div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-semibold mt-2 text-primary">
              KSH {product.price}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-muted-foreground">
                {product.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">{product.phoneNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Location:</span>
                  <p className="font-medium">{product.location.replace(/_/g, " ")}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Exchange Possible:</span>
                  <p className="font-medium">{product.exchangePossible}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Negotiable:</span>
                  <p className="font-medium">{product.openToNegotiation.replace(/_/g, " ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specific Details */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Brand</dt>
                  <dd className="font-medium">{product.brand.replace(/_/g, " ")}</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm font-medium text-muted-foreground">Color</dt>
                  <dd className="font-medium">{product.color}</dd>
                </div>

                {/* Laptop Specifics */}
                {product.type === "LaptopComputer" && (
                  <>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Type</dt>
                      <dd className="font-medium">{product.type}</dd>
                    </div>
                    {product.model && (
                      <div className="space-y-1">
                        <dt className="text-sm font-medium text-muted-foreground">Model</dt>
                        <dd className="font-medium">{product.model}</dd>
                      </div>
                    )}
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Processor</dt>
                      <dd className="font-medium">{product.processorType}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">RAM</dt>
                      <dd className="font-medium">{product.ram}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Storage</dt>
                      <dd className="font-medium">{product.storageCapacity} {product.storageType}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">OS</dt>
                      <dd className="font-medium">{product.operatingSystem.replace(/_/g, " ")}</dd>
                    </div>
                  </>
                )}

                {/* Headphone Specifics */}
                {product.type === "Headphone" && (
                  <>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Type</dt>
                      <dd className="font-medium">{product.type.replace(/_/g, " ")}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Form Factor</dt>
                      <dd className="font-medium">{product.formFactor.replace(/_/g, " ")}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Connectivity</dt>
                      <dd className="font-medium">{product.connectivity}</dd>
                    </div>
                    {product.resistance && (
                      <div className="space-y-1">
                        <dt className="text-sm font-medium text-muted-foreground">Resistance</dt>
                        <dd className="font-medium">{product.resistance} Ω</dd>
                      </div>
                    )}
                  </>
                )}

                {/* Bag Specifics */}
                {product.type === "Bag" && (
                  <>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Type</dt>
                      <dd className="font-medium">{product.type.replace(/_/g, " ")}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Gender</dt>
                      <dd className="font-medium">{product.gender}</dd>
                    </div>
                  </>
                )}

                {/* Clothing Specifics */}
                {product.type === "Clothing" && (
                  <>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Type</dt>
                      <dd className="font-medium">{product.type.replace(/_/g, " ")}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Gender</dt>
                      <dd className="font-medium">{product.gender}</dd>
                    </div>
                    <div className="space-y-1">
                      <dt className="text-sm font-medium text-muted-foreground">Made in Kenya</dt>
                      <dd className="font-medium">{product.madeInKenya ? "Yes" : "No"}</dd>
                    </div>
                    {product.hasWarranty && (
                      <div className="space-y-1">
                        <dt className="text-sm font-medium text-muted-foreground">Warranty</dt>
                        <dd className="font-medium">{product.warrantyPeriod} Days</dd>
                      </div>
                    )}
                  </>
                )}
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

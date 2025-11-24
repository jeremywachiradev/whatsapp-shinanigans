"use client"

import { useRouter } from "next/navigation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { Badge } from "~/components/ui/badge"

interface Product {
  id: string
  title: string
  category: string
  subcategory: string
  price: string
  location: string
  condition: string
  createdAt: Date
  type: "LaptopComputer" | "Headphone" | "Bag" | "Clothing"
}

interface ProductTableProps {
  products: Product[]
}

export function ProductTable({ products }: ProductTableProps) {
  const router = useRouter()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price (KSH)</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Condition</TableHead>
            <TableHead className="text-right">Date Listed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                No products found. Be the first to post an ad!
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow
                key={product.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/products/${product.id}`)}
              >
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{product.category}</span>
                    <span className="text-xs text-muted-foreground">
                      {product.subcategory}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.location.replace(/_/g, " ")}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="text-xs">
                    {product.condition.replace(/_/g, " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {new Date(product.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import { CreateListingForm } from "~/components/forms/create-listing-form"

export default function SellPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button asChild variant="ghost" className="gap-2 pl-0 hover:pl-0 hover:bg-transparent">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Link>
          </Button>
        </div>
        <CreateListingForm />
      </div>
    </div>
  )
}

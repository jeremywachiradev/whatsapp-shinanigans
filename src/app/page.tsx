import { getAllProducts } from "~/app/actions";
import { PostAdButton } from "~/components/post-ad-button";
import { ProductTable } from "~/components/product-table";
import NavBar  from "~/components/navbar";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <main className="container mx-auto px-4 py-10 md:px-6">
      <NavBar />
      <div className="flex flex-col gap-8 mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
          </div>
          <PostAdButton />
        </div>

        <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
          <div className="p-6">
            <h2 className="mb-4 text-xl leading-none font-semibold tracking-tight">
              Latest Listings
            </h2>
            <ProductTable products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}

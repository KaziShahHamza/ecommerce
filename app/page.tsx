import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 3,
  });

  console.log(products);

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to Nimo Lighting
            </h1>
            <h2 className="text-neutral-600">
              Discover the latest and best light in the market.
            </h2>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
          <Image
            src={products.data[0].images[0]}
            width={450}
            height={450}
            alt="Banner Image"
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}

import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

function ProductsIndex() {
  return (
    <main className="min-h-screen bg-[#070d0f] text-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0b6b72] via-[#0a3d43] to-[#070d0f] px-6 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.14),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-center gap-4 sm:justify-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--bs-gold)] bg-black/35 text-3xl font-semibold text-[var(--bs-gold)] shadow-[0_0_25px_rgba(200,155,60,0.25)]">
              BS
            </div>
            <div>
              <p className="font-script text-4xl leading-none text-[var(--bs-gold)] sm:text-5xl">
                BS Consulting & Services
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/80">
                Strategic Guidance. Practical Execution.
              </p>
            </div>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Be cool, stay ready, do better
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Practical resources and implementation-first guidance built for
            professionals who want consistent execution and measurable results.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-[var(--bs-gold)]/40 pb-4">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--bs-gold)]">
                Our eBooks
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Designed for immediate application in real client and team
                environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group rounded-2xl border border-[var(--bs-gold)]/25 bg-gradient-to-b from-[#10262a] to-[#0b1113] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.38)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--bs-gold)]/70 hover:shadow-[0_16px_35px_rgba(200,155,60,0.24)]"
              >
                <Link
                  to="/products/$productId"
                  params={{
                    productId: product.id.toString(),
                  }}
                  className="block"
                >
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--bs-gold)]">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-white/75">
                  {product.shortDescription}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-semibold text-[var(--bs-gold)]">
                    ${product.price.toFixed(2)}
                  </p>
                  <BuyButton
                    productId={product.id}
                    className="border-[var(--bs-gold)] bg-[var(--bs-gold)]/12 px-4 py-2 text-sm font-medium text-[var(--bs-gold)] transition-colors duration-300 hover:bg-[var(--bs-gold)] hover:text-[#111]"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

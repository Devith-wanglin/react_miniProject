import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Cpu, Camera, Battery, Smartphone, Palette, Calendar, Monitor, HardDrive } from "lucide-react"
import data from "../data/data"

const ProductDetail = () => {
  const { id } = useParams()
  const product = data.find((d) => d.id === Number(id))

  if (!product) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-sm font-semibold text-gray-600 hover:text-gray-900">
          ← Back to products
        </Link>
      </section>
    )
  }

  const { title, img, color, announced, display, resolution, camera, chipset, ram, battery, price } = product

  const specs = [
    { icon: Palette, label: "Color", value: color },
    { icon: Calendar, label: "Announced", value: announced },
    { icon: Monitor, label: "Display", value: display },
    { icon: Monitor, label: "Resolution", value: resolution },
    { icon: Camera, label: "Camera", value: camera },
    { icon: Cpu, label: "Chipset", value: chipset },
    { icon: HardDrive, label: "RAM", value: ram },
    { icon: Battery, label: "Battery", value: battery },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
            <Smartphone className="h-3.5 w-3.5" />
            Premium
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
          <p className="mt-2 text-3xl font-bold text-gray-900">{price}</p>

          <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</dt>
                  <dd className="mt-0.5 text-sm font-semibold text-gray-900">{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail

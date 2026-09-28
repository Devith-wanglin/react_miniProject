import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"


const Card = ({id,img,title,price}) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl">
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={img}
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          Premium
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h1 className="text-lg font-semibold text-gray-900 line-clamp-1">{title}</h1>
        <h3 className="mt-1 text-xl font-bold text-gray-900">${price}</h3>

        <Link
          to={id.toString()}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Detail
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}

export default Card

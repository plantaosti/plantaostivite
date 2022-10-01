import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface IBreadcrumbsitens {
  href: string;
  name: string;
}
interface IBreadcrumbs {
  breadcrumbs: IBreadcrumbsitens[];
}

export function Breadcrumbs({ breadcrumbs }: IBreadcrumbs) {
  return (
    <div className="flex max-w-5xl m-auto pb-2">
      <ul className="flex gap-2">
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={i}>
              <Link
                className="flex flex-row items-center gap-1 hover:text-gray-300 transition-all duration-300"
                to={`${breadcrumb.href}`}
                title={`Link para acessar a página ${breadcrumb.name}`}
                aria-label={`Link para acessar a página ${breadcrumb.name}`}
              >
                {breadcrumb.name}
                {i != breadcrumbs.length - 1 ? <CaretRight /> : ""}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

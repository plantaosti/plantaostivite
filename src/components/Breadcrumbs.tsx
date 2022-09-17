import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

interface IBreadcrumbs {
  enderecos: String[];
}

export function Breadcrumbs({ enderecos }: IBreadcrumbs) {
  return (
    <div className="flex max-w-5xl m-auto pb-2">
      <ul className="flex gap-2">
        <li>
          <Link
            to="/"
            className="flex flex-row items-center gap-1 hover:text-gray-300 transition-all duration-300"
          >
            Home <CaretRight />
          </Link>
        </li>
        {enderecos.map((endereco) => {
          return (
            <li>
              <Link
                className="flex flex-row items-center gap-1 hover:text-gray-300 transition-all duration-300"
                to={`/${endereco}`}
              >
                {enderecos.indexOf(endereco) < enderecos.length - 1
                  ? `${endereco} >`
                  : endereco}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";

export function Breadcrumbs() {
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

        <li>
          <Link
            className="flex flex-row items-center gap-1 hover:text-gray-300 transition-all duration-300"
            to="/farmacias"
          >
            Farmacias
          </Link>
        </li>
      </ul>
    </div>
  );
}

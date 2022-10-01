import { Eye } from "phosphor-react";
import { Link } from "react-router-dom";

interface IPosts {
  posts: IPost[] | undefined;
}
interface IPost {
  id: string;
  slug: string;
  title: string;
  thumbnail: {
    url: string;
  };
  views: number;
}

export function Noticias({ posts }: IPosts) {
  return (
    <>
      <section className="max-w-full flex-col m-auto pt-6 px-4">
        <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl  dark:text-gray-100">
            Notícias
          </h2>
          <span className="text-sm py-2 text-gray-300 dark:text-gray-200">
            {""}
          </span>
        </div>
        <div className="flex flex-col max-w-5xl m-auto py-6">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            {posts?.map((post) => {
              return (
                <li key={post.id}>
                  <Link
                    to={`/noticia/${post.slug}`}
                    className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                    title={`${post.title}`}
                  >
                    <img
                      className="max-w-[200px] max-h-[200px] m-auto"
                      src={`${post.thumbnail.url}`}
                      alt={`${post.title}`}
                    />
                    <div>
                      <div className="flex gap-4 items-center text-gray-400">
                        <h4 className="text-sm text-gray-500 mb-3 font-semibold">
                          {post.title.substring(0, 80)}...
                        </h4>
                        <div className="flex flex-col items-center w-[60px]">
                          <Eye size={24} />
                          {post.views ? post.views : ""}
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
            <li className="flex">
              <div className="flex p-6 m-auto max-w-sm lg:max-w-5xl justify-center items-center">
                <Link
                  to={"/noticias"}
                  className="bg-green-600 px-8 py-4 flex justify-center text-white hover:bg-gray-400 transition-all duration-300 dark:bg-gray-600 dark:hover:bg-gray-400"
                >
                  Ver todas
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

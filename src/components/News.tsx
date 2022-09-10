import { FormEvent, useState } from "react";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ISubscribe {
  email: string;
}

const schemaSubscribe = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

export function Newsletter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaSubscribe) });
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(data:ISubscribe) {
    await createSubscriber({
      variables: {
        email: data.email,
      },
    });
    reset();
  }
  return (
    <section className="w-full flex-col px-6 py-8 lg:py-10 lg:px-6 bg-gray-300 md:bg-none">
      <div className="bg-gray-300">
        <div className="flex justify-center max-w-5xl m-auto pb-8">
          <h3 className="text-xl font-bold text-white lg:text-3xl  dark:text-gray-600">
            News Letter
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-7 max-w-5xl m-auto">
          <div className="flex flex-col text-white dark:text-gray-600 max-w-sm gap-3">
            <p className="text-sm md:text-lg">
              Você que mora em Santa Terezinha de Itaipu e esta cansado de rodar
              a cidade toda para encontrar a farmácia de planão da semana, se
              liga, aqui você tem todas as informações.
            </p>
            <p className="text-sm md:text-lg">
              Você também pode se inscrever na nossa newslettar e receber essa
              informação por email!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSubscribe)}>
            <div className="flex flex-col md:flex-row justify-center p-4 gap-4 md:gap-0">
              <div className="flex flex-row md:flex-col w-60 md:max-w-xl bg-white">
                <input
                  className="w-60 px-6 py-4 rounded-none"
                  type="email"
                  placeholder="Seu melhor email!"
                  {...register("email", { required: true })}
                />
              </div>

              <button
                className="text-white bg-green-600 hover:bg-gray-400 transition-all dark:bg-gray-600 dark:hover:bg-gray-400 px-6 py-4"
                disabled={loading}
                type="submit"
              >
                Inscrever-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

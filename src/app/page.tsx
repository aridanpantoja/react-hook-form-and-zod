'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .email('Digite um e-mail válido')
    .min(1, 'O e-mail é obrigatório'),
  password: z.string().min(8, 'A senha deve ter no mínino 8 caracteres'),
})

type formData = z.infer<typeof formSchema>

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(formSchema) })

  function submitForm(data: formData) {
    console.log(data)
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-pink-50 bg-[linear-gradient(to_right,#f9a8d41a_1px,transparent_1px),linear-gradient(to_bottom,#f9a8d41a_1px,transparent_1px)] bg-[size:2rem_2rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#fbcfe8,transparent)]"></div>
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex w-full max-w-96 flex-col items-start gap-6 rounded-xl border bg-white p-8 shadow-md"
      >
        <div className="w-full space-y-2 text-gray-900">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm "
          />
          {errors.email && (
            <span className="mt-1 block text-sm text-pink-600">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="w-full space-y-2 text-gray-900">
          <label htmlFor="" className="font-semibold">
            Senha
          </label>
          <input
            type="password"
            {...register('password')}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm"
          />
          {errors.password && (
            <span className="mt-1 block text-sm text-pink-600">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-md border border-gray-300 bg-gray-900 px-6 py-2 font-bold text-white"
        >
          Enviar
        </button>
      </form>
    </main>
  )
}

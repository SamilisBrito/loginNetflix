import { object, string } from "yup";
import { NetflixInput } from "./NetflixInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const userSchema = object({
  email: string()
    .test(
      "is-email-or-phone",
      "Informe um email ou número de telefone válido.",
      (value) => emailRegex.test(value) || phoneRegex.test(value)
    )
    .required("Campo obrigatório"),
  password: string()
    .min(4, "A senha deve ter entre 4 e 60 caracteres.")
    .max(60, "A senha deve ter entre 4 e 60 caracteres.")
    .required("Campo obrigatório"),
});

export function FormLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  function onSubmit (data) {
    navigate("/home");
  };

  return (
    <div className="m-auto py-12 px-16 max-w-[28.125rem] bg-black/70 rounded z-20 relative">
      <h1 className="text-white text-3xl font-bold mb-7">Entrar</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 text-center transition-all"
      >
        <NetflixInput
          register={{ ...register("email") }}
          errorMessage={errors.email?.message}
          type={"text"}
          label={"Email ou número de celular"}
          name={"text"}
        />

        <NetflixInput
          register={{ ...register("password") }}
          errorMessage={errors.password?.message}
          type={"password"}
          label={"Senha"}
          name={"password"}
        />

        <button className="bg-red-600 p-2 rounded font-medium text-white hover:bg-red-700">
          Entrar
        </button>
        <p className="text-neutral-400">OU</p>
        <button className="bg-neutral-600/70 p-2 rounded font-medium text-white hover:bg-neutral-600/50 ">
          Usar um código de acesso
        </button>
        <p className="inline m-auto text-white hover:underline hover:text-white/70">
          Esqueceu a senha?
        </p>
      </form>
      <div className="mt-5 text-neutral-400 flex flex-col gap-4">
        <fieldset>
          <input
            type="checkbox"
            name="rememberPassword"
            id="rememberPassword"
            placeholder="Email ou número de celular"
          />
          <label htmlFor="rememberPassword" className="text-white ml-3">
            Lembre-se de mim
          </label>
        </fieldset>
        <p>
          Novo por aqui?{" "}
          <a href="#" className="text-white font-medium hover:underline">
            Assine agora
          </a>
          .
        </p>
        <p className="text-xs">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.{" "}
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Saiba mais.
          </a>
        </p>
      </div>
    </div>
  );
}

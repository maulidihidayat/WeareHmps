"use client";
import React from "react";
import Image from "next/image";
import image from "@/source/image";
import Link from "next/link";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

const schemaRegister = z.object({
  name: z
    .string()
    .min(5, { message: "nama lengkap kamu harus diisi dengan benar yaa!" }),
  email: z.string().email({ message: "Mohon email diisi dengan benar yaa!" }),
  password: z
    .string()
    .min(8, { message: "password kamu harus diisi minimal 8 karakter yaa!" }),
  confirmPassword: z.string().min(8, { message: "Password harus sesuai" }),
});

const Page = () => {
  const methods = useForm<z.infer<typeof schemaRegister>>({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: zodResolver(schemaRegister),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FieldValues) => {
    try {
      // Here you can handle your login logic, e.g., call an API
      console.log(data);
      // You can also use signIn for email/password login if you have an API for it
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error (e.g., show a notification)
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/Dashboard/Users" }); // Redirect to home after sign-in
    if (result?.error) {
      console.error("Google sign-in failed:", result.error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <div>
      <div className="max-w-sm p-6 mx-auto">
        <div className="absolute ml-96">
          <Image src={image.star2} alt={"star1"} />
          <Image src={image.star} alt={"star1"} className="ml-8" />
        </div>
        <h1 className="text-[40px] w-full text-secondary font-black mb-4">
          Yuk Buat Akun
        </h1>
        <p className="text-[18px] text-success">
          Menemani masa kuliahmu bareng kami
        </p>
        <FormProvider {...methods}>
          <form
            className="flex flex-col mt-4 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Nama Lengkap"
              name="name"
              placeholder="Nama Kamu"
              register={register}
              type="text"
              error={errors.name}
            />

            <InputField
              label="Email"
              name="email"
              placeholder="kamu@gmail.com"
              register={register}
              type="email"
              error={errors.email}
            />

            <InputField
              label="Password"
              name="password"
              placeholder="******"
              register={register}
              type="password"
              error={errors.password}
            />

            <InputField
              label="Konfirmasi Password"
              name="confirmPassword"
              placeholder="******"
              register={register}
              type="password"
              error={errors.confirmPassword}
            />

            <div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
              >
                Daftar
              </button>
            </div>

            <p className="text-[18px] text-success font-semibold text-center">
              ---------------atau---------------
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-4 bg-white text-secondary px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt=""
                  className="h-5 h-5"
                />
                <span>Login With Google</span>
              </button>
            </div>

            {/* Sign Up Prompt */}
            <div className="mt-4 text-center">
              <p className="text-secondary">
                Sudah punya akun?{" "}
                <Link
                  href={"/auth/login"}
                  className="text-primary hover:underline"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;

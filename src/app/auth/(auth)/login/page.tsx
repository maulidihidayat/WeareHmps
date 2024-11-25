"use client";

import image from "@/source/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react"; // Import signIn dari next-auth
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "email kamu harus diisi dengan benar yaa!" }),
  password: z
    .string()
    .min(8, { message: "Password harus terdiri dari 8 karakter!" }),
});


const Page = () => {
  const methods = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur", // Use onBlur mode for validation
    resolver: zodResolver(loginSchema),
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
    <div className="max-w-sm p-6 mx-auto">
      <div className="absolute ml-96">
        <Image src={image.star2} alt={"star1"} />
        <Image src={image.star} alt={"star1"} className="ml-8" />
      </div>
      <h1 className="text-[40px] w-full text-secondary font-black mb-4">
        Masukkan Akun
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
            label="Email"
            name="email"
            placeholder="@student.hamzanwadi.ac.id"
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
          <div className="flex justify-between mt-2 ">
            <a
              href="/auth/lupaPassword"
              className="ml-48 text-primary underline font-semibold hover:underline"
            >
              Lupa kata sandi?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
            >
              Login
            </button>
          </div>
          <p className="text-[18px] text-success font-semibold text-center">
            ---------------atau---------------
          </p>          
          <div className="flex justify-center">
            <button
              type="button" // Ubah type menjadi button
              onClick={handleGoogleSignIn} // Tambahkan onClick untuk login dengan Google
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
              Belum punya akun?{" "}
              <Link
                href={"/auth/register"}
                className="text-primary hover:underline"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Page;

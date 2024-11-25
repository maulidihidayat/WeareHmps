"use client";
import image from "@/source/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { z } from "zod"; // Ensure you import z from zod
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/InputField";

// Define your Zod schema
const lupaPasswordSchema = z.object({
  email: z
    .string()
    .min(5, { message: "email kamu harus diisi dengan benar yaa!" })
    .email("Mohon masukkan email yang valid!"), // Validate email format
});

const Page = () => {
  const methods = useForm<z.infer<typeof lupaPasswordSchema>>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur", // Use onBlur mode for validation
    resolver: zodResolver(lupaPasswordSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSave = (data: z.infer<typeof lupaPasswordSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="max-w-sm p-6 mx-auto">
        <div className="absolute ml-96">
          <Image src={image.star2} alt={"star1"} />
          <Image src={image.star} alt={"star1"} className="ml-8" />
        </div>
        <h1 className="text-[40px] w-full text-secondary font-black mb-4">
          Masukkan Email
        </h1>
        <p className="text-[18px] text-success">
          Masukkan email di bawah ini biar nanti mimin kirimin link buat atur
          ulang kata sandi kamu ya 😋
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSave)}
            className="flex flex-col mt-4 space-y-4"
          >
            <InputField
              label="Email"
              name="email"
              placeholder="@student.hamzanwadi.ac.id"
              type="email"
              register={register}
              error={errors.email}
            />
            <div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-2"
              >
                Kirim
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-secondary">
                Udah inget kata sandi?{" "}
                <Link
                  href={"/auth/login"}
                  className="text-primary hover:underline"
                >
                  Klik disini!
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
        {/* Google Login Button */}
      </div>
    </div>
  );
};

export default Page;

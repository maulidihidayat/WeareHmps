"use client";
import InputField from "@/components/InputField";
import image from "@/source/image";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const saranSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Mohon nama lengkap kamu diisi dengan benar yaa!" }),
  email: z
    .string()
    .email({ message: "Mohon email kamu diisi dengan benar yaa!" }),
  saran: z
    .string()
    .min(10, { message: "Mohon saran kamu diisi dengan benar yaa!" }),
});

interface InputForm {
  name: string;
  email: string;
  saran: string;
}

const Page = () => {
  const methods = useForm<z.infer<typeof saranSchema>>({
    defaultValues: {
      name: "",
      email: " ",
      saran: "",
    },
    mode: "all",
    resolver: zodResolver(saranSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data);

  return (
    <div>
      {/* Field for suggestions */}
      <div className="max-w-3xl p-6 mx-auto">
        <div>
          <h1 className="text-[40px] w-full text-secondary font-bold text-center">
            Kritik & Saran untuk Kami
          </h1>
          {/* Image for stars */}
          <div className="absolute ml-[700px] space-y-2">
            <Image src={image.Svg1} alt="Star Rating" width={40} height={40} />
          </div>
          <p className="text-success text-[18px] leading-relaxed mt-2">
            Hallo bro & sist! 🙌 Kami super excited banget buat dengerin kritik
            dan saran dari kalian semua! Jangan ragu, kasih tahu kami pendapat
            kalian ya! Kita pengen bareng-bareng bikin ini jadi lebih keren!
            Gimana menurut kalian? Yuk, share ide-ide menarik kamu di bawah ini!
            🚀🚀
          </p>
        </div>
        <div>
          <form
            className="flex flex-col mt-4 space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              label="Nama Lengkap"
              name="name"
              placeholder="Din samsudin"
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
              label="Kritik & Saran"
              name="saran"
              placeholder="Masukkan kritik & saran mu"
              register={register}
              type="textarea"
              error={errors.saran}
            />
            <div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-4 rounded-2xl border-b-[7px] border-secondary border-2 hover:bg-orange-600 w-full transition duration-200 font-bold text-[16px] mt-4 mb-10 hover:border-b-[9px]"
              >
                Kirim Saran
              </button>
            </div>
          </form>
          {/* End form */}
        </div>
      </div>
      {/* End */}
    </div>
  );
};

export default Page;

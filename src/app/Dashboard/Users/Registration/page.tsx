"use client";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  FieldValues,
  FormProvider,
  FormSubmitHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";

const registrasiSchema = z.object({
  name: z.string().min(5, { message: "Mohon email diisi dengan benar yaa!" }),
  nim: z.string().min(5, { message: "Nim kamu harus diisi yaa!" }),
  grade: z.string().min(1, { message: "Harus diisi yaa!" }),
  year: z.string().min(1, { message: "Harus diisi yaa!" }),
  email: z.string().email({ message: "Email yang kamu masukkan salah!" }),
  devision: z.string().min(5, { message: "Harus diisi yaa!" }),
  reason: z.string().min(5, { message: "Harus diisi yaa!" }),
});

interface Component {
  name: string;
  nim: string;
  year: string;
  grade: string;
  email: string;
  devision: string;
  reason: string;
}

const page = () => {
  const methods = useForm<z.infer<typeof registrasiSchema>>({
    defaultValues: {
      name: "",
      nim: "",
      year: "",
      grade: "",
      email: "",
      devision: "",
      reason: "",
    },
    mode: "all",
    resolver: zodResolver(registrasiSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;
  const onSave = (data: FieldValues) => {
    console.log(data);
  };



  return (
    <div>
      <div className="flex justify-center h-auto mb-10 ml-32">
        <div className="w-[902px] items-center p-10  rounded-2xl bg-bgproduk border-2 border-secondary max-w-3xl">
          <h4 className="text-white font-bold border-2 border-b-[7px] border-secondary rounded-xl bg-primary  mb-6 py-4  text-center">
            Registration Member
          </h4>
          <hr className="border-t-2  border-gray-300" />
          <FormProvider {...methods}>
            <form
              className="flex space-x-10 justify-center mt-6 "
              onSubmit={handleSubmit(onSave)}
            >
              {/* Full Name and */}
              <div className="mb-6 space-y-4 ">
                {/* Full Name */}
                <InputField
                  label="Nama Lengkap"
                  name="name"
                  placeholder="Nama Kamu"
                  register={register}
                  type="text"
                  error={errors.name}
                />

                {/* Nomor Induk */}
                <InputField
                  label="Nomor Induk Mahasiswa"
                  name="nim"
                  placeholder="Nim Kamu"
                  register={register}
                  type="text"
                  error={errors.nim}
                />

                {/* Tahun */}
                <InputField
                  label="Angkatan"
                  name="year"
                  placeholder="Angkatan Kamu"
                  register={register}
                  type="text"
                  error={errors.year}
                />

                {/* Class */}
                <InputField
                  label="Kelas"
                  name="grade"
                  placeholder="Kelas Kamu"
                  register={register}
                  type="text"
                  error={errors.grade}
                />

                {/* Email */}
              </div>

              {/* Devision and Reason */}
              <div className="space-y-4 mb-6">
                <InputField
                  label="Email"
                  name="email"
                  placeholder="Email Kamu"
                  register={register}
                  type="text"
                  error={errors.email}
                />
                {/* Devision */}
                <InputField
                  label="Devisi"
                  name="devision"
                  placeholder="Pilih Devisimu"
                  register={register}
                  type="select"
                  error={errors.devision}
                  options={[
                    { value: "Agama", label: "Devisi Agama" },
                    { value: "Sosial", label: "Devisi Sosial" },
                    { value: "Humas", label: "Humas" },
                    { value: "Kominfo", label: "Kominfo" },
                  ]}
                />

                {/* Reason */}

                <InputField
                  label="Alasan Kamu Bergabung"
                  name="reason"
                  placeholder="Tulis alasan Kamu disini"
                  register={register}
                  type="textarea"
                  error={errors.reason}
                />

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className=" w-[142px] border-b-[7px] bg-primary text-white hover:border-b-[6px] border-secondary border-2 font-bold py-3 px-4 rounded-xl  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default page;

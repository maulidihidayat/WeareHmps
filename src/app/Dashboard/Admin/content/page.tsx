"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema using Zod
const schema = z.object({
  title: z.string().min(1, "Judul tidak boleh kosong"),
  description: z.string().min(1, "Deskripsi tidak boleh kosong"),
  date: z.string().nonempty("Tanggal tidak boleh kosong"),
  media: z.instanceof(File).refine((file) => file.size < 5 * 1024 * 1024, {
    message: "File harus kurang dari 5MB",
  }),
});

// Infer the TypeScript type from the schema
type FormData = z.infer<typeof schema>;

const ContentUpdateForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("media", data.media); // Directly append the file

    // Handle the form submission, e.g., send data to the server
    try {
      const response = await fetch("/api/news/update", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Berita berhasil diupdate");
      } else {
        console.error("Gagal mengupdate berita");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-3xl border-2 border-secondary border-b-[7px] mb-10"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="text-[40px] w-full text-secondary font-bold text-center"
        >
          Judul Berita
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className="mt-2 p-2 border border-gray-300 rounded-xl border-secondary border-2 w-full"
              placeholder="Masukkan judul berita"
            />
          )}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="text-[40px] w-full text-secondary font-bold text-center"
        >
          Deskripsi Berita
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className="mt-2 p-2 border border-gray-300 rounded-xl border-secondary border-2 w-full"
              placeholder="Masukkan deskripsi berita"
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="date"
          className="text-[40px] w-full text-secondary font-bold text-center"
        >
          Tanggal
        </label>
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="mt-2 p-2 border border-gray-300 rounded-xl border-secondary border-2 w-full"
            />
          )}
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="media"
          className="text-[40px] w-full text-secondary font-bold text-center"
        >
          Upload Video atau Foto
        </label>
        <Controller
          name="media"
          control={control}
          render={({ field: { onChange, onBlur, ref } }) => (
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  onChange(e.target.files[0]); // Set the first file
                }
              }}
              onBlur={onBlur}
              ref={ref}
              className="mt-2 p-2 border border-gray-300 rounded-xl border-secondary border-2 w-full"
            />
          )}
        />
        {errors.media && <p className="text-red-500">{errors.media.message}</p>}
      </div>
      <button
        type="submit"
        className="text-success text-[18px] leading-relaxed mt-2 bg-primary rounded-xl p-4 border-secondary border-2 border-b-[7px] text-white font-semibold w-full hover:border-primary"
      >
        Update Berita
      </button>
    </form>
  );
};

export default ContentUpdateForm;

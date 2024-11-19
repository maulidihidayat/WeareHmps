import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f35f15', // Warna utama
        secondary: '#1d2c2a', // Warna sekunder
        success: '#52525B', // Warna sukses
        background: '#18181b', // Warna latar belakang
        text: '#fff', // Warna teks
        bgaccent:'#ffbbf0',
        bgproduk:'#fee5f8',
        bgproduksekunder:'#ffedd3'
      },
    },
  },
  plugins: [],
} satisfies Config;

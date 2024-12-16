import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme : {
	extend : {
		animation : {
			"loop-scroll" : "loop-scroll 50s linear infinite",
		},
		keyframes : {
			"loop-scroll" : {
				from : { transform : "translateX(0)"},
				to : {transform : "translateX(-100%)"},
			},
		},
	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

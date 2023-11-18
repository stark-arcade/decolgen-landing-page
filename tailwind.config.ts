import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#202020CC",
        body: "#080C2B",
        card:'#0E1233',
        'gradient-1':'linear-gradient(54.84deg, #E900A9 -36.72%, #E502AC -16.52%, #D806B5 5.22%, #C20EC5 28.53%, #A318DA 53.38%, #7D25F5 76.68%, #6F2AFF 84.45%)'
      },
      backgroundImage:{
        'body':"url('/images/art/body_art.svg')",
        'about':"url('/images/art/post_story.png')",
      },
      
    },
  },
  plugins: [],
};
export default config;

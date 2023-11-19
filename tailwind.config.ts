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
        title:'#202020'
      
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

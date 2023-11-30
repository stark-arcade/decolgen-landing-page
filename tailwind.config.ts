import type { Config } from "tailwindcss";




const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStroke:{
      'default': '0.5px',
      },
      colors: {
        header: "#202020CC",
        body: "#080C2B",
        card:'#0E1233',
        title:'#202020'
      
      },
    
      backgroundImage:{
        'body_art':"url('/images/art/bg/background_main.svg')",
        "roadmap":"url('/images/art/bg/roadmap.svg')",
        'about':"url('/images/art/post_story.png')",
        'notfound':"url('/images/art/bg/notfound.svg')",
      },
      
    },
  },
  plugins: [],
};
export default config;

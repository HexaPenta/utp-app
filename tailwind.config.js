/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        civilEngineering:
          "url('https://f.hubspotusercontent40.net/hubfs/6397695/ingenieria-civil.jpg')",
        systemsEngineering:
          "url('https://tecnico.ulisboa.pt/files/2021/05/cientistas-do-tecnico-voltam-a-estar-em-destaque-no-ranking-dos-melhores-do-mundo-em-ciencias-da-computacao-1140x641.jpg')",
        architecture:
          "url('https://img.artpal.com/31586/2-16-5-8-9-35-24m.jpg')",
        industrialEngineering:
          "url('https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/img/ing_industrial_2__0.jpg?itok=kjIXj7Vu')",
        all: "url('https://www.realinfluencers.es/wp-content/uploads/2018/09/learning-3245793_1920-1.jpg')",
      },
    },
  },
  plugins: [],
};

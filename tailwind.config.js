/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/views/cards/*.{vue,js,ts,tsx,jsx}",
        "./src/views/classes/*.{vue,js,ts,tsx,jsx}",
        "./src/views/types/*.{vue,js,ts,tsx,jsx}",
        "./src/views/*.{vue,js,ts,tsx,jsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            boxShadow: {
                neon: "0 0 10px theme('colors.purple.600')",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};

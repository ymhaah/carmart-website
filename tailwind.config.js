import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    "0%": {
                        transform: "translateY(-125%)",
                    },
                    "100%": {
                        transform: "translateY(0%)",
                    },
                },
                slideOut: {
                    "0%": {
                        transform: "translateY(0%)",
                    },
                    "100%": {
                        transform: "translateY(-125%)",
                    },
                },
            },
            animation: {
                slideIn: "slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                slideOut: "slideOut 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
            },
            colors: {
                "primary-clr": {
                    500: "#4400FF",
                    400: "#6933FF",
                    200: "#A98AFF",
                    50: "#ECE6FF",
                },
                "txt-clr": {
                    900: "#0F0F0F",
                    800: "#2B2B2B",
                    700: "#343434",
                    600: "#707070",
                },
                "bg-clr": {
                    500: "#E5E5E5",
                    100: colors.white,
                },

                "purple-500": "#4400FF",
                "purple-400": "#6933FF",
                "purple-200": "#A98AFF",
                "purple-50": "#ECE6FF",

                "violet-800": "#8A898A",
                "violet-700": "#B2B1B2",
                "violet-600": "#E4E3E4",
                "violet-500": "#FAF9FB",
                "violet-400": "#FBFAFC",
                "violet-300": "#FCFBFC",
                "violet-200": "#FDFCFD",
                "violet-100": "#FDFDFE",
                "violet-50": "#FFFEFF",

                "red-500": "#B00020",
                "red-400": "#C0334D",
            },
        },
    },
    plugins: [],
};

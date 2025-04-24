/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#edf3ff",
          "200": "rgba(224, 242, 254, 0.35)",
        },
        White: "#fff",
        lavender: "rgba(243, 232, 255, 0.35)",
        Border: "#e2e8f0",
        "Grey-600": "#5b5b6f",
        Dark: "#171718",
        papayawhip: "rgba(255, 237, 213, 0.35)",
        honeydew: {
          "100": "#dcfce7",
          "200": "rgba(220, 252, 231, 0.35)",
        },
        "Primary-900": "#19194d",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f7f7f7",
          "300": "#f3f5f7",
        },
        "Primary-950": "#0d0d26",
        black: "#000",
        gray: "rgba(0, 0, 0, 0.1)",
        "Grey-950": "#25252d",
        blueviolet: {
          "100": "#b33eed",
          "200": "#3e3fed",
        },
        "Grey-200": "#d8d8df",
        goldenrod: "#edb93e",
        deepskyblue: "#4fb9ea",
        "Grey-500": "#707088",
      },
      fontFamily: {
        "Small-Medium": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "3xs": "10px",
        "25xl-4": "44.4px",
        "605xl-4": "624.4px",
        "12xs": "1px",
      },
      padding: {
        "2xl": "21px",
        xl: "20px",
        lg: "18px",
        sm: "14px",
        "6xs": "7px",
        "3xl": "22px",
        "12xs": "1px",
        "9xl": "28px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xs: "12px",
      "9xl": "28px",
      "3xs": "10px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

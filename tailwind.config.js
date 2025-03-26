/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        /**
         * @description custom background colors
         */
        _background: {
          DEFAULT: "#262626", // $background
          hover: "#8d8d8d29", // Gray 50 @ 16%
          active: "#8d8d8d66", // Gray 50 @ 40%
          selected: "#8d8d8d3d", // Gray 50 @ 24%
          selected_hover: "#8d8d8d52", // Gray 50 @ 32%
          inverse: "#f4f4f4", // Gray 10
          inverse_hover: "#e5e5e5", // Gray 10 hover
          brand: "#0f62fe", // Blue 60
        },
        /**
         * @description custom border colors
         */
        _border: {
          interactive: "#4589ff", // $border-interactive

          subtle_00: "#525252", // $border-subtle-00
          subtle_01: "#525252", // $border-subtle-01
          subtle_02: "#616161", // $border-subtle-02
          subtle_03: "#8d8d8d", // $border-subtle-03

          subtle_selected_01: "#616161", // $border-subtle-selected-01
          subtle_selected_02: "#8d8d8d", // $border-subtle-selected-02
          subtle_selected_03: "#a8a8a8", // $border-subtle-selected-03

          strong_01: "#8d8d8d", // $border-strong-01
          strong_02: "#a8a8a8", // $border-strong-02
          strong_03: "#c6c6c6", // $border-strong-03

          tile_01: "#616161", // $border-tile-01
          tile_02: "#8d8d8d", // $border-tile-02
          tile_03: "#a8a8a8", // $border-tile-03

          inverse: "#f4f4f4", // $border-inverse
          disabled: "#8d8d8d80", // Gray 50 @ 50%
        },
        /**
         * @description custom text colors
         */
        _text: {
          primary: "#f4f4f4", // $text-primary
          secondary: "#c6c6c6", // $text-secondary
          placeholder: "#6f6f6f", // $text-placeholder
          on_color: "#ffffff", // $text-on-color
          on_color_disabled: "#ffffff40", // White @ 25%
          helper: "#8d8d8d", // $text-helper
          error: "#ffb3b8", // $text-error
          inverse: "#161616", // $text-inverse
          disabled: "#f4f4f440", // Gray 10 @ 25%
        },
        /**
         * @description custom link colors
         */
        _link: {
          primary: "#78a9ff", // $link-primary
          primary_hover: "#a6c8ff", // $link-primary-hover
          secondary: "#a6c8ff", // $link-secondary

          inverse: "#0f62fe", // $link-inverse
          inverse_hover: "#0043ce", // $link-inverse-hover
          inverse_active: "#161616", // $link-inverse-active

          visited: "#be95ff", // $link-visited
          inverse_visited: "#8a3ffc", // $link-inverse-visited
        },
        /**
         * @description custom icon colors
         */
        _icon: {
          primary: "#f4f4f4", // $icon-primary
          secondary: "#c6c6c6", // $icon-secondary
          on_color: "#ffffff", // $icon-on-color
          on_color_disabled: "#8d8d8d", // $icon-on-color-disabled
          interactive: "#ffffff", // $icon-interactive
          inverse: "#161616", // $icon-inverse
          disabled: "#f4f4f440", // Gray 10 @ 25%
        },
        /**
         * @description support colors (status feedback)
         */
        _support: {
          error: "#ff8389", // $support-error
          success: "#42be65", // $support-success
          warning: "#f1c21b", // $support-warning
          info: "#4589ff", // $support-info

          error_inverse: "#da1e28", // $support-error-inverse
          success_inverse: "#24a148", // $support-success-inverse
          warning_inverse: "#f1c21b", // $support-warning-inverse
          info_inverse: "#0043ce", // $support-info-inverse

          caution_major: "#ff832b", // $support-caution-major
          caution_minor: "#f1c21b", // $support-caution-minor

          undefined: "#a56eff", // $support-undefined
        },
        /**
         * @description button colors
         */
        _button: {
          primary: "#0f62fe", // $button-primary
          primary_hover: "#0353e9", // $button-primary-hover
          primary_active: "#002d9c", // $button-primary-active

          secondary: "#6f6f6f", // $button-secondary
          secondary_hover: "#606060", // $button-secondary-hover
          secondary_active: "#393939", // $button-secondary-active

          tertiary: "#ffffff", // $button-tertiary
          tertiary_hover: "#f4f4f4", // $button-tertiary-hover
          tertiary_active: "#c6c6c6", // $button-tertiary-active

          danger_primary: "#da1e28", // $button-danger-primary
          danger_secondary: "#ff8389", // $button-danger-secondary
          danger_hover: "#ba1b23", // $button-danger-hover
          danger_active: "#750e13", // $button-danger-active

          separator: "#161616", // $button-separator
          disabled: "#6f6f6f", // $button-disabled
        },
        /**
         * @description tag colors (dark mode)
         */
        _tag: {
          // Gray
          background_gray: "#525252",
          color_gray: "#e0e0e0",
          hover_gray: "#636363",
          border_gray: "#8d8d8d",

          // Cool Gray
          background_cool_gray: "#4d5358",
          color_cool_gray: "#d1d6d6",
          hover_cool_gray: "#61686d",
          border_cool_gray: "#878d96",

          // Warm Gray
          background_warm_gray: "#565151",
          color_warm_gray: "#e5e0df",
          hover_warm_gray: "#696363",
          border_warm_gray: "#8e8383",

          // Red
          background_red: "#a2191f",
          color_red: "#ffd7d9",
          hover_red: "#c21c25",
          border_red: "#fa4d56",

          // Magenta
          background_magenta: "#9f1853",
          color_magenta: "#ffd6e8",
          hover_magenta: "#ae153f",
          border_magenta: "#ee5396",

          // Purple
          background_purple: "#6929c4",
          color_purple: "#e8daff",
          hover_purple: "#7a3ec8",
          border_purple: "#a56eff",

          // Blue
          background_blue: "#0043ce",
          color_blue: "#d0e2ff",
          hover_blue: "#0053ff",
          border_blue: "#4589ff",

          // Cyan
          background_cyan: "#00539a",
          color_cyan: "#bae6ff",
          hover_cyan: "#0066bd",
          border_cyan: "#1192e8",

          // Teal
          background_teal: "#005d5d",
          color_teal: "#9ef0f0",
          hover_teal: "#007070",
          border_teal: "#009d9a",

          // Green
          background_green: "#0e6027",
          color_green: "#a7f0ba",
          hover_green: "#11742f",
          border_green: "#24a148",
        },
      },
      fontFamily: {
        body: ["Montserrat", "Gowun Dodum", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

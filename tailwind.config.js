/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(222.2 84% 4.9%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(222.2 84% 4.9%)',
        popover: 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(222.2 84% 4.9%)',
        primary: 'hsl(267 85% 57%)',
        'primary-foreground': 'hsl(210 40% 98%)',
        secondary: 'hsl(275 40% 96%)',
        'secondary-foreground': 'hsl(267 84% 4.9%)',
        muted: 'hsl(275 40% 96%)',
        'muted-foreground': 'hsl(267 16.3% 46.9%)',
        accent: 'hsl(275 40% 96%)',
        'accent-foreground': 'hsl(267 84% 4.9%)',
        destructive: 'hsl(0 84.2% 60.2%)',
        'destructive-foreground': 'hsl(210 40% 98%)',
        border: 'hsl(214.3 31.8% 91.4%)',
        input: 'hsl(214.3 31.8% 91.4%)',
        ring: 'hsl(267 85% 57%)',
      },
    },
  },
  plugins: [],
}
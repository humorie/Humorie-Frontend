/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          50: '#FFF9FB',
          100: '#FEF2F6',
          200: '#FDE5ED',
          300: '#FBCCDB',
          400: '#F8B2CA',
          500: '#F699B8',
          600: '#F47FA6',
          700: '#F36795',
          800: '#E74278',
          900: '#C93263',
          950: '#A4234D',
        },
        secondary: {
          100: '#EAF6E8',
          300: '#DBEFD8',
          400: '#C9E8C5',
          500: '#BCE0B7',
          600: '#9BD592',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        point: {
          1: '#F9F5B7',
          2: '#C3E4EA',
          3: '#C3E4EA',
          4: '#FDF1E5',
          5: '#9BD592',
          6: '#EAF6E8',
        },
        status: {
          1: '#3385FF',
          2: '#FF6363',
          3: '#FF4141',
          4: '#FF6363',
        },
      },
    },
  },
  plugins: [],
}

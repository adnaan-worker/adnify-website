import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // VS Code Dark Theme Colors
        'vs-bg': '#1e1e1e',
        'vs-bg-hover': '#2a2d2e',
        'vs-bg-active': '#37373d',
        'vs-border': '#3c3c3c',
        'vs-titlebar': '#252526',
        'vs-activitybar': '#333333',
        'vs-sidebar': '#252526',
        'vs-editor-bg': '#1e1e1e',
        'vs-editor-gutter': '#2d2d2d',
        'vs-editor-line-highlight': '#2a2d2e',
        'vs-editor-selection': '#264f78',
        'vs-editor-inactive-selection': '#3a3d41',
        'vs-statusbar': '#007acc',
        'vs-statusbar-hover': '#005a9e',
        'vs-tab-active': '#1e1e1e',
        'vs-tab-inactive': '#2d2d2d',
        'vs-tab-hover': '#2a2d2e',
        
        // Syntax Highlighting Colors
        'syntax-keyword': '#c586c0',
        'syntax-function': '#dcdcaa',
        'syntax-string': '#ce9178',
        'syntax-comment': '#6a9955',
        'syntax-number': '#b5cea8',
        'syntax-variable': '#9cdcfe',
        'syntax-type': '#4ec9b0',
        'syntax-property': '#9cdcfe',
        'syntax-operator': '#d4d4d4',
        'syntax-punctuation': '#d4d4d4',
        'syntax-tag': '#569cd6',
        'syntax-attribute': '#9cdcfe',
        'syntax-annotation': '#bb86fc',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'mono': ['"Fira Code"', '"Cascadia Code"', '"Consolas"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config


import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					blue: '#4EEAFF',
					pink: '#FF4EEA',
					purple: '#A64EFF',
					green: '#4EFFA6'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 15px rgba(78, 234, 255, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(78, 234, 255, 0.8)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '100%' },
					'100%': { backgroundPosition: '0%' }
				},
				'particle-float': {
					'0%': { transform: 'translate(0, 0) rotate(0)' },
					'25%': { transform: 'translate(5px, -5px) rotate(2deg)' },
					'50%': { transform: 'translate(0, -10px) rotate(0)' },
					'75%': { transform: 'translate(-5px, -5px) rotate(-2deg)' },
					'100%': { transform: 'translate(0, 0) rotate(0)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 5s infinite linear',
				'particle-float': 'particle-float 8s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'text-gradient': 'linear-gradient(to right, #4EEAFF, #FF4EEA, #4EEAFF)',
				'dark-gradient': 'linear-gradient(to bottom, #0f172a, #020617)'
			},
			boxShadow: {
				'neon-blue': '0 0 10px rgba(78, 234, 255, 0.7)',
				'neon-pink': '0 0 10px rgba(255, 78, 234, 0.7)',
				'neon-purple': '0 0 10px rgba(166, 78, 255, 0.7)',
				'neon-green': '0 0 10px rgba(78, 255, 166, 0.7)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

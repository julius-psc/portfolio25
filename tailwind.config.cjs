/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10em',
        '12xl': '12em',
        '14xl': '14em',
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      colors: {
        general: {
          background: '#0d1117',
          gradient1: '#2c446b',
          gradient2: '#3db1d0',
          gradient3: '#5c698d',
          outline: '#21262d',
          maintext: '#a8d0db',
          subtext: '#dee6f4',
          paragraphtext: 'rgba(139, 148, 158, 1)',
          paragraphnum: 'rgba(139, 148, 158, 0.5)',
          subtle: "rgba(255, 255, 255, 0.5)"
        },
        navbar: {
          navtext: '#8b949e',
          links: 'rgba(139, 148, 158, 0.5)',
        },
        header: {
          maintext: '#a8d0db',
          subtext: '#dee6f4',
        },
        about: {
          container: '#131820',
          glasscontainer: 'rgba(255, 255, 255, 0.2)',
        },
        education: {
          square: '#172431',
          years: '#a8d0db',
          outline: '#808B9D',
        },
        internships: {
          sectionbg: '#21262d',
          interncontainer: 'rgba(13, 23, 39, 0.6)',
        },
        projects: {
          status: {
            pending: '#df432a',
            ongoing: '#DE672F',
            done: '#56d364',
          },
        },
        contact: {
          dragcontainerout: 'rgba(168, 208, 219, 0.2)',
          dragcontainerin: '#a8d0db'
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.double-border': {
          position: 'relative',
        },
        '.double-border::before': {
          content: '""',
          position: 'absolute',
          top: '-12px', // Adjust if your original top border is different
          left: '-12px', // Adjust if your original left border is different
          right: '-12px', // Adjust if your original right border is different
          bottom: '0px', // Adjust if your original bottom border is different
          borderRight: '1px solid rgba(255, 255, 255, 0.2)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          borderTopLeftRadius: '1.4rem',
          borderTopRightRadius: '1.4rem',
          zIndex: '1', // Ensure it's behind other content and pseudo-elements
        },
        '.double-border::after': {
          content: '""',
          position: 'absolute',
          top: '-1px', // Half of the outer border's offset (half of 8px)
          left: '0px', // Half of the outer border's offset
          right: '-1px', // Half of the outer border's offset
          bottom: '0px', // Half of the outer border's offset
          borderTop: '1px solid rgba(128, 139, 157, 0.2)',
          borderRight: '1px solid rgba(128, 139, 157, 0.2)',
          borderLeft: '1px solid rgba(128, 139, 157, 0.2)',
          borderTopLeftRadius: '0.8rem',
          borderTopRightRadius: '0.8rem',
          borderBottom: '0',
          zIndex: '1',
        },
      });
    },
  ],
};
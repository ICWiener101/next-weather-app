import type { Config } from 'tailwindcss';

const config: Config = {
      content: [
            './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
            './src/components/**/*.{js,ts,jsx,tsx,mdx}',
            './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
            extend: {
                  // colors: {
                  //       currentWeatherBlue: '#7ACCF3',
                  // },
                  gridTemplateColumns: {
                        'columns-3': 'grid-template-columns: 1fr 1fr 1fr',
                  },
                  gridTemplateRows: {
                        'rows-3': 'grid-template-rows: 0.1fr 1.4fr 1.4fr',
                  },
                  gap: {
                        'custom-gap': '5%',
                  },
                  justifyItems: {
                        center: 'center',
                  },
                  alignItems: {
                        center: 'center',
                  },
                  justifySelf: {
                        center: 'center',
                  },
                  alignSelf: {
                        center: 'center',
                  },
                  gridRowHeights: {
                        '0.2fr': '20%',
                        '1.4fr': '40%',
                  },
            },
      },
      plugins: [],
};
export default config;

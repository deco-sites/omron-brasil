import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    container: { 
      center: true 
    },
    colors: {
      'white': "#FFFFFF",
      'white-light': "#e9e7ea",
      'black': "#000000",
      'dark-blue': "#003153",
      'pigeon-blue': "#306F95",
      'pigeon-blue-75': "#6493AF",
      'omron-blue': '#005EB8',
      'omron-blue-75': "#4086CA",
      'light-gray': "#E5E5E5",
      'highlight-blue': "#00F0FF",
      'coral': "#FF7474",
      'dark-gray': "#7F7F7F",
      'gray': "#C9C9C9",
      'gray-middle': "#C7C7C7",
      'pale-gray': "#F2F2F2",
      'mint': "#3EB3A1",
      'lavender': "#7F74FF",
      'red': "#CE2141",
      'red-middle': "#CE21414D",
      'blue-light': "#5090b4",
      'blue-middle': "#005EB8",
      'blue-middle-29': "#005EB829",
      'mint-dark': "#3EB3A14D",
      'lavender-dark': "#7F74FF4D",
    },
  },
};

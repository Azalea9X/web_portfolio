module.exports = {
  friendlyName: "Render Vite.js app",
  description: "Render the Vite.js app",

  inputs: {},

  exits: {
    success: {
      responseType: "view",
      viewTemplatePath: "vite-app/index.html", // Path to the Vite.js app's HTML file
    },
  },

  fn: async function (_, exits) {
    return exits.success();
  },
};

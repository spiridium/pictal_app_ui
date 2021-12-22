import { createApp } from "https://unpkg.com/petite-vue?module";
createApp({
  box: false,
  header: {
      backgroundColor: {
        label: "Color",
        value: "",
        type: "color",
      },
      boxed: [
        { id:"boxed", label: "Boxed", value: "true", type: "radio", name: "boxed" },
        { id:"full", label: "Full", value: "false", type: "radio", name: "boxed" }
      ]
  }
}).mount()
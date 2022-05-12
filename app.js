const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "",
      qrCode: "CodeGenerate_qr",
    };
  },
  mounted() {
    this.generate();
  },
  methods: {
    generate() {
      const data = "Code";
      const baseUrl =
        "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=";
      this.qrCode = `${baseUrl}${this.text}`;
    },
    async pasteClip() {
      this.text = await navigator.clipboard.readText();
      this.generate()
    },
  },
}).mount("#app");

const { createApp } = Vue;

createApp({
  data() {
    return {
      text: "",
      qrCode: "CodeGenerate_qr",
      viewText: true,
      viewWifi: false,
      ssid: null,
      security: "WPA",
      password: null,
      linkDownload: null,
    };
  },
  mounted() {
    this.generate();
  },
  methods: {
    setViewWifi() {
      this.viewText = false;
      this.viewWifi = true;
    },
    setViewText() {
      this.viewWifi =  false;
      this.viewText = true;
    },
    generate() {
      const baseUrl = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=";
      const wifiString = `WIFI:S:${this.ssid};T:${this.security};P:${this.password};`

      if(this.viewWifi) {
        this.linkDownload = `${baseUrl}${wifiString}`
        return this.qrCode = `${baseUrl}${wifiString}`;
      }
      this.linkDownload = `${baseUrl}${this.text}`
      this.qrCode = `${baseUrl}${this.text}`;
    },
    async pasteClip() {
      this.text = await navigator.clipboard.readText();
      this.generate();
    },
    downloadQR() {
      console.log("Download")
    },
    async shareQR() {
      const shareData = {
        title: 'MDN',
        text: 'Aprenda desenvolvimento web no MDN!',
        url: 'https://developer.mozilla.org'
      }

      try {
        navigator.canShare(shareData).then((item) => {
          console.log("the", item)
        })
      } catch (error) {
        console.log("Error: "+error)
      }
    }
  },
}).mount("#app");

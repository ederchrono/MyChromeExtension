const userName = getCookie("username");
var app = new Vue({
  el: "#app",
  data: {
    mounted: false,
    userName: userName,
    currentTime: new Date()
  },
  mounted() {
    this.mounted = true
    setInterval(this.updateTime, 10 * 1000);
  },
  methods: {
    updateTime() {
      this.currentTime = new Date();
    }
  },
  computed: {
    message() {
      return `Hi ${this.userName}!`;
    },
    timeText() {
      return (
        this.currentTime.getHours() +
        ":" +
        (this.currentTime.getMinutes() < 10 ? "0" : "") +
        this.currentTime.getMinutes()
      );
    },
    dateText() {
      return this.currentTime.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
  }
});
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

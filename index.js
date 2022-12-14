var xhr = new XMLHttpRequest();
xhr.responseType = "blob";

xhr.onload = function () {
  var reader = new FileReader();

  reader.onloadend = function () {
    var byteCharacters = atob(
      reader.result.slice(reader.result.indexOf(",") + 1)
    );

    var byteNumbers = new Array(byteCharacters.length);

    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: "video/h264" });
    var url = URL.createObjectURL(blob);

    document.getElementById("_video").src = url;
  };

  reader.readAsDataURL(xhr.response);
};

xhr.open("GET", "rtsp://139.255.76.3:7447/62fb61af5710bbdb2e3855b3_0");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
xhr.setRequestHeader(
  "Access-Control-Expose-Headers",
  "access-control-allow-origin"
);
xhr.setRequestHeader("Access-Control-Allow-Credentials", true);
xhr.send();

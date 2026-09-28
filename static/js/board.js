(function () {
  var MAX = 6 * 3600;                       // bar is full at 6 hours left
  var start = Date.now();
  var rows = [].slice.call(document.querySelectorAll(".rb-row"));
  if (!rows.length) return;

  function fmt(s) {
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h ? h + "h " + m + "m left" : m + "m " + Math.floor(s % 60) + "s left";
  }

  function tick() {
    var elapsed = (Date.now() - start) / 1000;
    rows.forEach(function (row) {
      var bar = row.querySelector(".rb-bar");
      var left = Math.floor(Number(row.dataset.secs) - elapsed);
      if (left <= 0) {
        bar.className = "rb-bar gone";
        bar.textContent = "Expired. Listing closed.";
        return;
      }
      bar.className = "rb-bar " + (left < 3600 ? "coral" : left < 10800 ? "mango" : "mint");
      bar.style.width = Math.max(8, (left / MAX) * 100) + "%";
      bar.textContent = fmt(left);
    });
  }

  tick();
  setInterval(tick, 1000);
})();
function addContentSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var arrHoursElems = [];

  for (var i = 0; i < 24; i++) {
    var blockHuor = document.createElement('div');
    blockHuor.classList.add('hour');
    var huorText = document.createElement('span');
    huorText.classList.add('hour__text');
    huorText.textContent = "".concat(i < 10 ? '0' + i : i, ":00");
    blockHuor.append(huorText);
    arrHoursElems.push(blockHuor);
  }

  sidebar.append.apply(sidebar, arrHoursElems);
}

;
export { addContentSidebar };
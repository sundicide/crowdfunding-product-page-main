var prevActivated = null;
var prevActivatedName = null;

function clickPledge(e, name) {
  var classList = e.classList;
  var classActive = "active";

  if (prevActivated) {
    prevActivated.remove(classActive);
  }

  if (prevActivatedName === name) {
    prevActivatedName = null;
    return;
  } else {
    prevActivatedName = name;
  }

  if (Array.from(e.classList).includes(classActive)) {
    classList.remove(classActive);
  } else {
    classList.add(classActive);
    prevActivated = classList
  }
}

function selectReward() {
  var modal = document.querySelector("div[class*='modal']");
  modal.classList.add("active");
}

function closeModal() {
  var modal = document.querySelector("div[class*='modal']");
  modal.classList.remove("active");
}
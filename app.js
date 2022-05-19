// import React from "react";
let dau = 0;
let cuoi = 90;
let event;
let batsukien = 0;
function Runfacke() {
  let dangnhay = 0;
  setInterval(function () {
    dau += 0.3;
    cuoi -= 0.3;
    if (dau >= 35) dau -= 0.3;
    if (cuoi == 0) cuoi = dau + 35;
    if (dangnhay != 0) dangnhay--;
    if (evntrun() == -1) {
      dangnhay = 40;
      i = 0;
      console.log(dangnhay, " ", dau, " ", cuoi);
    } else {
      if (dangnhay == 0 && dau >= cuoi && cuoi >= dau - 0.7) {
        Killer();
      }
    }
  }, 50);
}

function Run() {
  document.getElementById("start").style.display = "none";
  const elem1 = document.getElementById("nhanvat");
  let idrun;
  const elem2 = document.getElementById("vatchanden");
  const elem3 = document.getElementById("duong");
  pos2 = 0;
  clearInterval(idrun);
  idrun = setInterval(function () {
    if (dau < 35) {
      elem1.style.left = dau + "%";
    }
    if (cuoi > 0) {
      elem2.style.left = cuoi + "%";
    } else if (elem2 != null) {
      elem2.remove();
    }
    pos2 -= 0.1;
    elem3.style.left = pos2 + "%";
    // console.log(window.getComputedStyle(elem1).getPropertyValue("left"));
    // let x = parseInt(window.getComputedStyle(elem1).getPropertyValue("left"));
    // let y = parseInt(window.getComputedStyle(elem1).getPropertyValue("top"));
    // let a = parseInt(window.getComputedStyle(elem2).getPropertyValue("left"));
    // let b = parseInt(window.getComputedStyle(elem2).getPropertyValue("top"));
    // Stop(x, y, a, b);
  }, 50);
  Runfacke();
  // idReverseRun = setInterval(function () {}, 100);
  // evntrun();
}
// function ReverseRun() {

//   // Stop();
// }
function restart() {
  window.location.reload();
}
// let dino = document.getElementById("nhanvat1");
// console.log(dino);
function jump() {
  if (document.getElementById("nhanvat").classList.contains("jump") != true) {
    document.getElementById("nhanvat").classList.add("jump");
    console.log("iadiyai");
    setTimeout(function () {
      document.getElementById("nhanvat").classList.remove("jump");
    }, 1500);
  }
}

function evntrun() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 32) {
      jump();
      batsukien = -1;
    }
  });
  console.log(batsukien);
  return i;
}

function Stop(x, y, a, b) {
  if (x == a && y == b) {
    Killer();
  }
}

function Killer() {
  document.getElementById("kill").style.display = "block";
  document.getElementById("restart").style.display = "block";
}

let stage1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing Hack process....");
    }, 1000);
  });
};
let stage2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        "The provided link is loading....  https://www.instagram.com/monoashu/?hl=en"
      );
    }, 2000);
  });
};
let stage3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connecting to instagram....");
    }, 3000);
  });
};
let stage4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("monoashu");
    }, 4000);
  });
};
let stage5 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(" SUCCESSFULL <br> Getting Password....");
    }, 4000);
  });
};
let stage6 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("PASSWORD = ***********");
    }, 4000);
  });
};
let start = async () => {
  btn.innerHTML = "&#128128";
  hack();
  let a1 = await stage1();
  console.log(a1);
  let p = document.getElementById("time");
  p.innerHTML = a1;
  let a2 = await stage2();
  console.log(a2);
  p.innerHTML = a2;
  let a3 = await stage3();
  console.log(a3);
  p.innerHTML = a3;
  let a4 = await stage4();
  console.log(a4);
  p.innerHTML = a4;
  let i = document.createElement("img");
  i.src = "/img/monu.jpg";
  p.appendChild(i);
  i.style.width = "70px";
  i.style.borderRadius = "50%";
  let a5 = await stage5();
  console.log(a5);
  p.innerHTML = a5;
  let a6 = await stage6();
  console.log(a6);
  p.innerHTML = a6;
};

let hack = function coding() {
  for (let i = 0; i < 1; i++) {
    set = setInterval(() => {
      // console.log(i);
      function t() {
        let d = Math.floor(Math.random() * 1100000);
        let e = Math.floor(Math.random() * 1000000);
        let f = Math.floor(Math.random() * 1000000);
        let g = Math.floor(Math.random() * 1000000);
        hackCode.innerHTML =
          hackCode1.innerHTML =
          hackCode2.innerHTML =
          hackCode4.innerHTML =
          hackCodeTwo.innerHTML =
          hackCodethree.innerHTML =
          hackCodefour.innerHTML =
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g +
            "080" +
            f +
            "00" +
            d +
            "0" +
            e +
            "010" +
            g;
      }
      t();
    }, 80);
  }
};

// start();

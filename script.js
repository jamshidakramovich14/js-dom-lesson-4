"use strict";
const wrapper = document.querySelector(".card__wrapper");
for (let i = 0; i < 5; i++) {
  let card = document.createElement("div");
  card.innerHTML = `
       <div class="card w-[230px] h-[400px] p-[10px] bg-white">
            <img src="./assets/images/macbook.png" alt="smthimg" />
            <p class="text-[18px] text-[#0D63F3] mb-[6px]">299 000 so’m</p>
            <p class="text-[14px] mb-[33px]">
              Apple Airpods Pro simsiz quloqchin , Oq rangda
            </p>
            <p class="text-[14px] text-black opacity-30">1230 ta buyurtma</p>
            <div class="mt-[25px] flex gap-[20px]">
              <button
                class="text-[16px] bg-[#0D63F3] py-[10px] px-[20px] rounded-xl text-white"
              >
                Sotib olish
              </button>
              <img src="./assets/images/shopping_cart.svg" alt="smthimg" />
            </div>
          </div>
    
    
    
    `;
  wrapper.appendChild(card);
}

const wrapper2 = document.querySelector(".card__wrapper2");
for (let i = 0; i < 5; i++) {
  let card = document.createElement("div");
  card.innerHTML = `
       <div class="card w-[230px] h-[400px] p-[10px] bg-white">
            <img src="./assets/images/macbook.png" alt="smthimg" />
            <p class="text-[18px] text-[#0D63F3] mb-[6px]">299 000 so’m</p>
            <p class="text-[14px] mb-[33px]">
              Apple Airpods Pro simsiz quloqchin , Oq rangda
            </p>
            <p class="text-[14px] text-black opacity-30">1230 ta buyurtma</p>
            <div class="mt-[25px] flex gap-[20px]">
              <button
                class="text-[16px] bg-[#0D63F3] py-[10px] px-[20px] rounded-xl text-white"
              >
                Sotib olish
              </button>
              <img src="./assets/images/shopping_cart.svg" alt="smthimg" />
            </div>
          </div>
    
    
    
    `;
  wrapper2.appendChild(card);
}

const wrapper3 = document.querySelector(".card__wrapper3");
for (let i = 0; i < 5; i++) {
  let card = document.createElement("div");
  card.innerHTML = `
       <div class="card w-[230px] h-[400px] p-[10px] bg-white">
            <img src="./assets/images/macbook.png" alt="smthimg" />
            <p class="text-[18px] text-[#0D63F3] mb-[6px]">299 000 so’m</p>
            <p class="text-[14px] mb-[33px]">
              Apple Airpods Pro simsiz quloqchin , Oq rangda
            </p>
            <p class="text-[14px] text-black opacity-30">1230 ta buyurtma</p>
            <div class="mt-[25px] flex gap-[20px]">
              <button
                class="text-[16px] bg-[#0D63F3] py-[10px] px-[20px] rounded-xl text-white"
              >
                Sotib olish
              </button>
              <img src="./assets/images/shopping_cart.svg" alt="smthimg" />
            </div>
          </div>
    
    
    
    `;
  wrapper3.appendChild(card);
}

const wrapper4 = document.querySelector(".card__wrapper4");
for (let i = 0; i < 5; i++) {
  let card = document.createElement("div");
  card.innerHTML = `
       <div class="card w-[230px] h-[400px] p-[10px] bg-white">
            <img src="./assets/images/macbook.png" alt="smthimg" />
            <p class="text-[18px] text-[#0D63F3] mb-[6px]">299 000 so’m</p>
            <p class="text-[14px] mb-[33px]">
              Apple Airpods Pro simsiz quloqchin , Oq rangda
            </p>
            <p class="text-[14px] text-black opacity-30">1230 ta buyurtma</p>
            <div class="mt-[25px] flex gap-[20px]">
              <button
                class="text-[16px] bg-[#0D63F3] py-[10px] px-[20px] rounded-xl text-white"
              >
                Sotib olish
              </button>
              <img src="./assets/images/shopping_cart.svg" alt="smthimg" />
            </div>
          </div>
    
    
    
    `;
  wrapper4.appendChild(card);
}

let loadwrapper = document.querySelector(".load_wrapper");

window.addEventListener("DOMContentLoaded", () => {
  loadwrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loadwrapper.style.display = "none";
    document.body.style.overflow = "visible";
  }, 2000);
});

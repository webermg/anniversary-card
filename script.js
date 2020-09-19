//card state info
const cardStates = [
    {
        src: "assets/photo1.jpg",
        text: "I can't believe it has been ten years, it seems like just yesterday you were all smiles at the wedding. I remember you were so anxious about whether anyone enjoyed themselves. It was your day, you should have worried about yourself! That seems like forever ago, going to Ireland, soon after quitting the job in Virginia to move out to Seattle. I'm glad we did though, I much prefer Seattle to Newport News, housing prices aside. From there we got new jobs, bought a house, and went to Italy but we were still carefree children just living our lives a day at a time. But our idyllic lives wouldn't last forever. It wasn't long before we started trying to plant a seed, and oh boy did we ever plant one. Five years ago everything would change forever when in came...."
    },
    {
        src: "assets/photo2.jpg",
        text: "Ah, April 19, 2015, the day of reckoning. That was a day I will always remember, the day that little Owie arrived. We had no idea of how that would change things, especially given that he would turn out to be even more special than we thought. But really, that day that Owen was born was truly one of the few days that stand out in my life. I remember being almost overcome with emotion, which as you know is strange for me. Even if it meant we could no longer live our free lives, Owen is still one of the best things that has ever happened to us and I just love snuggling with him every night."
    },
    {
        src: "assets/photo3.jpg",
        text: "Now it's five years later and the time has flown by, I really feel like I've missed a year or something. Owen is starting school, I'm in school again, and we're all stuck at home because of the plague. At least I'm glad to be stuck at home, and it does give us more time for coffee in the mornings. Now it feels like we are again in a time of change like that of ten years ago, new jobs, new house eventually, and who knows what the future holds. One thing is sure though, the future holds you and me, because we will be together forever just like a song. I love you always, and you will always be my cutie no matter what happens. Well maybe Owen is the new cutie, but you are the OG cutie. Happy anniversary, and may we have many more growing old and grumpy together!"
    }
];
const sig = "Love, Matt";
let index;

//elements
const pic = document.getElementById("pic");
const text = document.getElementById("text");
const next = document.getElementById("next");
const signature = document.getElementById("signature");

const init = () => {
    index = 0;
    setTimeout(() => {
        setState(cardStates, index);
    }, 1000);

};

const setState = (states,index) => {
    if(index < 0 || index >= states.length) return;
    if(index % 2 === 0) {
        pic.style.float = "left";
        pic.style.paddingLeft = "0px";
        pic.style.paddingRight = "20px";
    }
    else {
        pic.style.float = "right";
        pic.style.paddingLeft = "20px";
        pic.style.paddingRight = "0px";
    }
    pic.setAttribute("src", states[index].src);
    text.textContent = states[index].text;
    if(index < states.length-1) {
        setTimeout(() => {
            next.style.opacity = "100%";
            next.style.cursor = "pointer";
            next.disabled = false;
        }, 6000);
    }
    else {
        signature.style.display = "block";
        signature.textContent = sig;
        delay(fadeIn, signature, 2000, 6000);
    }
    delay(fadeIn, pic, 3000, 1000);
    delay(fadeIn, text, 3000, 3000);
    
};

const delay = (func, element, duration, delay) => {
    setTimeout(() => {
        func(element, duration);
    }, delay);
};

const fadeIn = (element, duration) => {
    let opacity = 0;
    let interval = duration/100;
    const animation = setInterval(() => {
        element.style.opacity = `${opacity}%`;
        opacity++;
        if(opacity >= 100) clearInterval(animation);
    }, interval);
};

const fadeOut = (element, duration) => {
    let opacity = 100;
    let interval = duration/100;
    const animation = setInterval(() => {
        element.style.opacity = `${opacity}%`;
        opacity--;
        if(opacity <= 0) clearInterval(animation);
    }, interval);
};

next.addEventListener("click", e => {
    //fadeout
    next.style.cursor = "default";
    next.disabled = true;
    fadeOut(pic, 2000);
    fadeOut(text, 2000);
    fadeOut(next, 2000);
    
    index = index+1 < cardStates.length ? index+1 : 0;
    setTimeout(() => {
        setState(cardStates, index);
    },2000);
});

init();
//card state info
const cardStates = [
    {
        src: "http://placekitten.com/200/300",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium ex repellat, ipsa cumque amet hic iusto! Optio voluptates totam sit reprehenderit dignissimos, itaque, impedit incidunt facere, in quasi natus!"
    },
    {
        src: "http://placekitten.com/250/300",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eveniet, deleniti accusamus aspernatur eaque provident dolorum libero? Ea incidunt distinctio in voluptates aliquam, voluptatum sit ullam repudiandae doloribus perspiciatis iste."
    },
    {
        src: "http://placekitten.com/175/300",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente provident est saepe impedit, unde quod error officia ad tenetur, reprehenderit cum ipsa facere nobis earum molestias deserunt! Commodi, ducimus obcaecati!"
    }
];
const sig = "Signature";
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
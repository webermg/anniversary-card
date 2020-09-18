//card state info
const cardStates = [
    {
        src: "assets/test1.jpeg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt ante ut tortor consectetur tincidunt. Morbi finibus nisi vel mi dignissim, eget dapibus tellus molestie. Nulla rhoncus sem sit amet vulputate pellentesque. Donec aliquet libero condimentum quam mattis, sit amet tempor tortor suscipit. Quisque eleifend risus a eros pulvinar, ac hendrerit lorem congue. Nunc libero orci, finibus sed interdum et, fringilla quis ex. Morbi tristique, lacus eget pellentesque viverra, dui elit porttitor ligula, quis sollicitudin lacus nunc eget nibh. Cras feugiat hendrerit eros, in lobortis enim dignissim non. Cras et molestie diam, in lobortis tortor. Morbi non orci luctus urna blandit consequat vel ac lacus."
    },
    {
        src: "assets/test2.jpeg",
        text: "In neque eros, ornare nec arcu non, tempor consectetur eros. Proin tempor felis tellus, et porta massa malesuada vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla consectetur arcu sed libero placerat, at commodo massa sollicitudin. Aenean eleifend tortor nisl, id fermentum ante tincidunt non. Mauris nec eleifend metus. Vivamus tellus purus, ullamcorper sed ex lobortis, venenatis tincidunt libero. Nam ultrices est quam, vitae hendrerit magna fermentum ornare. Nam consequat tristique sapien, vel vulputate diam iaculis eu. Vestibulum a tellus consequat elit maximus sodales at id metus. Etiam ut lacus sed lectus convallis tristique."
    },
    {
        src: "assets/test3.jpg",
        text: "Mauris suscipit sapien diam, gravida aliquam turpis varius sit amet. Vivamus interdum velit dolor. In hac habitasse platea dictumst. Curabitur eu laoreet nunc. Sed ultrices varius ligula vel fringilla. Aliquam odio dui, vulputate et euismod non, egestas in ligula. Donec convallis laoreet convallis. Phasellus faucibus interdum mollis. Aenean in massa ut odio fermentum luctus a non tellus. Nunc volutpat arcu vel accumsan mollis. Praesent et congue ex. Vivamus sagittis purus ut magna rutrum, sed auctor ipsum molestie. Integer molestie tellus quis molestie laoreet."
    }
];
let index;

//elements
const pic = document.getElementById("pic");
const text = document.getElementById("text");
const next = document.getElementById("next");

const init = () => {
    index = 0;
    setState(cardStates, index);
}

const setState = (states,index) => {
    if(index < 0 || index >= states.length) return;
    if(index % 2 === 0) {
        pic.style.float = "left";
        pic.style.paddingLeft = "0px";
        pic.style.paddingRight = "20px";
    }
    pic.style.float = "left";
    pic.setAttribute("src", states[index].src);
    text.textContent = states[index].text;
}

next.addEventListener("click", e => {
    index = index+1 < cardStates.length ? index+1 : 0;
    setState(cardStates, index);
});

init();
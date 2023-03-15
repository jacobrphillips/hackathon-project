
let blockIn = gsap.timeline();

blockIn.from(".block-1", {opacity: 0, rotate: 50, y: 100, duration: 1.7});
blockIn.from(".block-2", {opacity: 0,  y: 100, duration: 1}, "<.7");
blockIn.from(".block-3", {opacity: 0, rotate: -50, y: 100, duration: 1}, "<.5");
blockIn.from(".img-one", {opacity: 0,  x: 100, duration: 1.7});
blockIn.from(".img-two", {opacity: 0,  y: -100, duration: 1}, "<.7");
blockIn.from(".img-three", {opacity: 0,  y: 100, duration: 1}, "<.5")





let bigWord = gsap.timeline({delay: 1});

bigWord.from(".words-container", {opacity: 0, x: 1500, duration: 4, delay: 3});
bigWord.from(".string-container", {opacity: 0, x: -7000, duration: 10}, "<");
bigWord.from(".flipped-container", {opactiy: 0, y: -600, duration: 10}, "<");


gsap.to(".word-2", {y: -300, duration: 9}, "<");
gsap.to(".word-3", {delay: 7, rotate: -30}, "<");
gsap.to(".block-2", {rotate: -10}, "<");
gsap.fromTo(".block-1-contents",{opacity: 0}, {opacity: 1, rotate: -10}, "<");
gsap.to(".word-2", {rotate: -70, duration: 4}, "<");



let stems = gsap.timeline();

stems.fromTo(".stem-one",{opacity: 0}, {opacity: 1, x: 100, delay: 4, duration: 2});
stems.fromTo(".stem-two",{opacity: 0}, {opacity: 1, x: 150, delay: 1, duration: 2}, "<");
stems.fromTo(".stem-three",{opacity: 0}, {opacity: 1, x: 200, delay: 1, duration: 2}, "<");
stems.fromTo(".stem-four",{opacity: 0}, {opacity: 1, y: 300, delay: 1, duration: 2}, "<");



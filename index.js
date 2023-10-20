let tl = gsap.timeline();

tl.from("nav", {
  y: "-100%",
  opacity: 0,
  duration: 1,
});

tl.from("h1", {
  y: "-100%",
  opacity: 0,
  duration: 1,
});

tl.to("img", {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  ease: "power3.out",
  duration: 1,
});

tl.from("span", {
  opacity: 0,
  duration: 3,
});

const cases = {
  media: {
    label: "Media",
    index: "01 / 06",
    eyebrow: "Creative partnerships",
    description:
      "We build visual worlds and stories that give ambitious ideas a clear point of view.",
    headline: "Stories of creative partnerships",
    quote:
      "OGMedia brought clarity to the story and restraint to the execution. The process was thoughtful, collaborative, and deeply considered.",
    person: "Alex Morgan",
    role: "Creative Director",
    image: "assets/Media-2.jpg",
    video:
      "https://d3p12bvhtoj2vu.cloudfront.net/GDG%20Event%20launch%20by%20@OGENGINE%20[S9MwyFOZZek].webm",
    thumbs: [
      "assets/Media-2.jpg",
      "assets/project-kinfolk.jpg",
      "assets/project-lumina.jpg",
      "assets/project-soma.jpg",
      "assets/project-velox.jpg",
      "assets/project-aethel.jpg",
    ],
  },
  editing: {
    label: "Editing",
    index: "02 / 06",
    eyebrow: "Editorial craft",
    description:
      "We shape raw material into precise, cinematic stories with rhythm, restraint, and feeling.",
    headline: "Every frame finds its rhythm",
    quote:
      "The edit gave the idea room to breathe. Every cut felt intentional, and the final piece carried exactly the weight it needed.",
    person: "Maya Chen",
    role: "Film Producer",
    image: "assets/Editing.jpg",
    thumbs: [
      "assets/Editing.jpg",
      "assets/project-soma.jpg",
      "assets/project-velox.jpg",
      "assets/project-kinfolk.jpg",
      "assets/project-lumina.jpg",
      "assets/project-aethel.jpg",
    ],
  },
  smm: {
    label: "SMM",
    index: "03 / 06",
    eyebrow: "Social presence",
    description:
      "We turn everyday attention into a living social presence built for people, not platforms.",
    headline: "Culture that keeps moving",
    quote:
      "The work gave our community a voice that felt immediate, human, and unmistakably ours.",
    person: "Nora Shah",
    role: "Brand Lead",
    image: "assets/SMM.jpg",
    thumbs: [
      "assets/project-soma.jpg",
      "assets/project-kinfolk.jpg",
      "assets/project-lumina.jpg",
      "assets/project-velox.jpg",
      "assets/project-aethel.jpg",
      "assets/Media-2.jpg",
    ],
  },
  performance: {
    label: "Performance Marketing",
    index: "04 / 06",
    eyebrow: "Growth systems",
    description:
      "We connect creative thinking to measurable momentum, making every signal work harder.",
    headline: "Momentum with a point of view",
    quote:
      "The strategy connected every signal to a story, turning performance into something people actually remembered.",
    person: "Jon Bell",
    role: "Growth Director",
    image: "assets/PM.jpg",
    thumbs: [
      "assets/project-velox.jpg",
      "assets/project-lumina.jpg",
      "assets/project-soma.jpg",
      "assets/project-aethel.jpg",
      "assets/project-kinfolk.jpg",
      "assets/Editing.jpg",
    ],
  },
  influencer: {
    label: "Influencer Marketing",
    index: "05 / 06",
    eyebrow: "Creators and culture",
    description:
      "We build credible creator partnerships that let good ideas travel through trusted voices.",
    headline: "Trust travels through people",
    quote:
      "OGMedia found the people who could carry the idea naturally, without losing what made it ours.",
    person: "Iris Cole",
    role: "Marketing Director",
    image: "assets/IM-1.jpg",
    thumbs: [
      "assets/project-kinfolk.jpg",
      "assets/project-aethel.jpg",
      "assets/project-soma.jpg",
      "assets/project-lumina.jpg",
      "assets/project-velox.jpg",
      "assets/Media-2.jpg",
    ],
  },
  events: {
    label: "Events",
    index: "06 / 06",
    eyebrow: "Live experiences",
    description:
      "We create live moments that bring people closer to the ideas, brands, and worlds they care about.",
    headline: "Make the moment stay",
    quote:
      "The event felt effortless in the room and unforgettable long after everyone went home.",
    person: "Theo James",
    role: "Experience Director",
    image: "assets/Events.jpg",
    thumbs: [
      "assets/project-aethel.jpg",
      "assets/project-lumina.jpg",
      "assets/project-soma.jpg",
      "assets/project-kinfolk.jpg",
      "assets/project-velox.jpg",
      "assets/Editing.jpg",
    ],
  },
};

const currentCase = cases[document.body.dataset.case] || cases.media;

document.title = `${currentCase.label} | OGMedia`;
document.querySelector("[data-case-label]").textContent = currentCase.label;
document.querySelector("[data-case-hero-title]").textContent =
  currentCase.label;
document.querySelector("[data-case-hero-label]").textContent =
  currentCase.label.toUpperCase();
document.querySelector("[data-case-description]").textContent =
  currentCase.description;
document.querySelector("[data-case-index]").textContent = currentCase.index;
document.querySelector("[data-case-eyebrow]").textContent = currentCase.eyebrow;
document.querySelector("[data-case-headline]").textContent =
  currentCase.headline;
document.querySelector("[data-case-quote]").textContent = currentCase.quote;
document.querySelector("[data-case-person]").textContent = currentCase.person;
document.querySelector("[data-case-role]").textContent = currentCase.role;

const feature = document.querySelector("[data-case-feature]");
const hero = document.querySelector("[data-case-hero]");
const thumbnailRail = document.querySelector("[data-case-thumbnails]");

let featureVideo = null;

if (currentCase.video) {
  featureVideo = document.createElement("video");
  featureVideo.className = "case-feature-video";
  featureVideo.src = currentCase.video;
  featureVideo.poster = currentCase.image;
  featureVideo.autoplay = true;
  featureVideo.muted = true;
  featureVideo.loop = true;
  featureVideo.playsInline = true;
  featureVideo.setAttribute("aria-label", `${currentCase.label} showreel`);
  feature.before(featureVideo);
  feature.closest(".case-feature").classList.add("has-video");
}

function showImage(source, activeIndex) {
  // Thumbnail 01 is the lead slot: it shows the video when the case has one.
  const showVideo = Boolean(featureVideo) && activeIndex === 0;

  if (featureVideo) {
    featureVideo.hidden = !showVideo;
    if (showVideo) featureVideo.play().catch(() => {});
    else featureVideo.pause();
  }
  feature.hidden = showVideo;
  feature.src = source;
  feature.alt = `${currentCase.label} project image`;
  thumbnailRail.querySelectorAll("button").forEach((button, index) => {
    button.classList.toggle("is-active", index === activeIndex);
  });
}

hero.src = currentCase.image;
hero.alt = `${currentCase.label} placeholder background`;

currentCase.thumbs.forEach((source, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "case-thumb";
  button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><img src="${source}" alt="">`;
  button.addEventListener("click", () => showImage(source, index));
  thumbnailRail.append(button);
});

showImage(currentCase.image, 0);

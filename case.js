import mediaFeatureImage from "./assets/optimized/Media-2-feature.jpg";
import editingImage from "./assets/optimized/Editing-feature.jpg";
import socialImage from "./assets/optimized/SMM-feature.jpg";
import performanceImage from "./assets/optimized/PM-feature.jpg";
import influencerImage from "./assets/optimized/IM-2-feature.jpg";
import eventsImage from "./assets/optimized/Events-feature.jpg";
import mediaThumbnail from "./assets/optimized/Media-2-thumb.jpg";
import editingThumbnail from "./assets/optimized/Editing-thumb.jpg";
import kinfolkImage from "./assets/project-kinfolk.jpg";
import luminaImage from "./assets/project-lumina.jpg";
import somaImage from "./assets/project-soma.jpg";
import veloxImage from "./assets/project-velox.jpg";
import aethelImage from "./assets/project-aethel.jpg";

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
    image: mediaFeatureImage,
    videos: [
      "https://d3p12bvhtoj2vu.cloudfront.net/videos/UNIFEST.mp4",
      "https://d3p12bvhtoj2vu.cloudfront.net/media/ChargeZone%20Expo.mp4",
      null,
      null,
      null,
      null,
    ],
    thumbs: [
      mediaThumbnail,
      kinfolkImage,
      luminaImage,
      somaImage,
      veloxImage,
      aethelImage,
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
    image: editingImage,
    thumbs: [
      editingThumbnail,
      somaImage,
      veloxImage,
      kinfolkImage,
      luminaImage,
      aethelImage,
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
    image: socialImage,
    thumbs: [
      somaImage,
      kinfolkImage,
      luminaImage,
      veloxImage,
      aethelImage,
      mediaThumbnail,
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
    image: performanceImage,
    thumbs: [
      veloxImage,
      luminaImage,
      somaImage,
      aethelImage,
      kinfolkImage,
      editingThumbnail,
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
    image: influencerImage,
    thumbs: [
      kinfolkImage,
      aethelImage,
      somaImage,
      luminaImage,
      veloxImage,
      mediaThumbnail,
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
    image: eventsImage,
    thumbs: [
      aethelImage,
      luminaImage,
      somaImage,
      kinfolkImage,
      veloxImage,
      editingThumbnail,
    ],
  },
};

const currentCase = cases[document.body.dataset.case] || cases.media;

const mediaPortfolioCategories = [
  {
    id: "universities",
    title: "Universities",
    description: "Campus life, student communities, and milestone moments.",
    items: [],
  },
  {
    id: "events-fests",
    title: "Events & Fests",
    description: "Stages, crowds, performances, and the energy of live events.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/The%20House%20of%20Coconut%20-%20The%20Grub%20Fest%20-%20Reel%202.mp4",
        orientation: "portrait",
        alt: "The House of Coconut - The Grub Fest",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Antrix%20Resorts%20-%20Rishikesh%20-%20Reel%2002.mp4",
        orientation: "portrait",
        alt: "Antrix Resorts, Rishikesh",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Jagran_3.mp4",
        orientation: "landscape",
        alt: "Jagran event",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/UNIFEST.mp4",
        orientation: "landscape",
        alt: "University fest",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "The people, spaces, and moments behind organizations.",
    items: [
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/ChargeZone%20Expo.mp4",
        orientation: "landscape",
        alt: "ChargeZone Expo",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Tj%20Diwali%20Party%2002_3.mp4",
        orientation: "landscape",
        alt: "TJ Diwali Party",
      },
      {
        type: "video",
        src: "https://d3p12bvhtoj2vu.cloudfront.net/media/Holi%20Party%20-%20SISL.mp4",
        orientation: "landscape",
        alt: "Holi Party - SISL",
      },
    ],
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Vehicles photographed with an eye for design and detail.",
    items: [],
  },
  {
    id: "portraits",
    title: "Portraits",
    description: "Personal portraits with character and presence.",
    items: [],
  },
  {
    id: "product-shoots",
    title: "Product Shoots",
    description: "Product imagery focused on form, texture, and detail.",
    items: [],
  },
];

const mediaPortfolioSlots = [
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "landscape", label: "Horizontal photo or video" },
  { orientation: "landscape", label: "Horizontal photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
  { orientation: "portrait", label: "Vertical photo or video" },
];

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

const mediaPortfolio = document.querySelector("[data-media-portfolio]");

if (mediaPortfolio && currentCase === cases.media) {
  const categoryNav = document.querySelector("[data-media-portfolio-nav]");
  const categoryList = mediaPortfolio.querySelector(
    "[data-media-portfolio-categories]",
  );

  mediaPortfolioCategories.forEach((category, index) => {
    const link = document.createElement("a");
    link.href = `#${category.id}`;
    link.textContent = `${String(index + 1).padStart(2, "0")} / ${category.title}`;
    categoryNav.append(link);

    const section = document.createElement("section");
    section.className = "media-portfolio-category";
    section.id = category.id;

    const heading = document.createElement("div");
    heading.className = "media-portfolio-category-heading";

    const number = document.createElement("p");
    number.className = "case-index";
    number.textContent = `0${index + 1}`;

    const title = document.createElement("h3");
    title.textContent = category.title;

    const description = document.createElement("p");
    description.textContent = category.description;

    heading.append(number, title, description);

    const gallery = document.createElement("div");
    gallery.className = "media-portfolio-gallery";

    const items = category.items.length ? category.items : mediaPortfolioSlots;
    items.forEach((item) => {
      const figure = document.createElement("figure");
      figure.className = `media-portfolio-placeholder media-portfolio-placeholder--${item.orientation}`;

      if (!category.items.length) {
        figure.setAttribute("aria-label", item.label);
        const placeholderText = document.createElement("span");
        placeholderText.textContent = item.label;
        figure.append(placeholderText);
      } else if (item.type === "video") {
        figure.classList.add("has-media");
        const video = document.createElement("video");
        video.controls = true;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.preload = "none";
        video.playsInline = true;
        video.setAttribute("aria-label", item.alt);
        if (item.poster) video.poster = item.poster;
        figure.append(video);

        let videoIsVisible = false;

        const playPortfolioVideo = () => {
          if (!videoIsVisible || document.hidden) return;

          if (video.getAttribute("src") !== item.src) {
            video.src = item.src;
            video.load();
          }

          video.play().catch((error) => {
            if (error.name !== "AbortError" && !document.hidden) {
              console.warn("A portfolio video could not start.", error);
            }
          });
        };

        const videoVisibility = new IntersectionObserver(
          ([entry]) => {
            videoIsVisible =
              entry.isIntersecting && entry.intersectionRatio >= 0.5;
            if (videoIsVisible) playPortfolioVideo();
            else video.pause();
          },
          { threshold: 0.5 },
        );
        videoVisibility.observe(figure);
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) video.pause();
          else playPortfolioVideo();
        });
      } else {
        figure.classList.add("has-media");
        const image = document.createElement("img");
        image.src = item.src;
        image.alt = item.alt;
        image.loading = "lazy";
        image.decoding = "async";
        figure.append(image);
      }

      gallery.append(figure);
    });

    const controls = document.createElement("div");
    controls.className = "media-portfolio-controls";

    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.className = "media-portfolio-control";
    previousButton.setAttribute("aria-label", `Previous ${category.title} work`);
    previousButton.textContent = "←";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "media-portfolio-control";
    nextButton.setAttribute("aria-label", `Next ${category.title} work`);
    nextButton.textContent = "→";

    const updateControls = () => {
      const maxScroll = gallery.scrollWidth - gallery.clientWidth;
      previousButton.disabled = gallery.scrollLeft <= 0;
      nextButton.disabled = gallery.scrollLeft >= maxScroll - 1;
    };

    const scrollGallery = (direction) => {
      const firstSlot = gallery.querySelector(".media-portfolio-placeholder");
      const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
      const distance = (firstSlot?.getBoundingClientRect().width || 240) + gap;
      gallery.scrollLeft += distance * direction;
    };

    previousButton.addEventListener("click", () => scrollGallery(-1));
    nextButton.addEventListener("click", () => scrollGallery(1));
    gallery.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    controls.append(previousButton, nextButton);
    section.append(heading, controls, gallery);
    categoryList.append(section);
    requestAnimationFrame(updateControls);
  });
}

let featureVideo = null;

if (currentCase.videos?.some(Boolean)) {
  featureVideo = document.createElement("video");
  featureVideo.className = "case-feature-video";
  featureVideo.autoplay = true;
  featureVideo.muted = true;
  featureVideo.loop = true;
  featureVideo.preload = "none";
  featureVideo.playsInline = true;
  featureVideo.setAttribute("aria-label", `${currentCase.label} showreel`);
  feature.before(featureVideo);
  feature.closest(".case-feature").classList.add("has-video");
}

let selectedVideoSource = null;
let featureIsVisible = false;

function playSelectedVideo() {
  if (!featureVideo || !selectedVideoSource) return;

  if (featureVideo.getAttribute("src") !== selectedVideoSource) {
    featureVideo.src = selectedVideoSource;
    featureVideo.load();
  }

  if (!featureIsVisible || document.hidden) return;

  featureVideo.play().catch((error) => {
    if (error.name !== "AbortError" && !document.hidden) {
      console.warn("The selected portfolio video could not start.", error);
    }
  });
}

if (featureVideo) {
  const featureVisibility = new IntersectionObserver(([entry]) => {
    featureIsVisible = entry.isIntersecting;
    if (featureIsVisible) playSelectedVideo();
    else featureVideo.pause();
  });

  featureVisibility.observe(feature.closest(".case-feature"));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) featureVideo.pause();
    else playSelectedVideo();
  });
}

function showImage(source, activeIndex) {
  const videoSource = currentCase.videos?.[activeIndex];
  const showVideo = Boolean(featureVideo && videoSource);

  if (featureVideo) {
    featureVideo.pause();
    featureVideo.poster =
      videoSource && activeIndex === 0 ? currentCase.image : source;
    selectedVideoSource = videoSource;
    featureVideo.hidden = !showVideo;
    if (showVideo) playSelectedVideo();
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
hero.decoding = "async";

currentCase.thumbs.forEach((source, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "case-thumb";
  button.setAttribute(
    "aria-label",
    `Show ${currentCase.label} work ${String(index + 1).padStart(2, "0")}`,
  );
  const number = document.createElement("span");
  number.textContent = String(index + 1).padStart(2, "0");
  const thumbnail = document.createElement("img");
  thumbnail.src = source;
  thumbnail.alt = "";
  thumbnail.loading = "lazy";
  thumbnail.decoding = "async";
  button.append(number, thumbnail);
  button.addEventListener("click", () => showImage(source, index));
  thumbnailRail.append(button);
});

showImage(currentCase.image, 0);

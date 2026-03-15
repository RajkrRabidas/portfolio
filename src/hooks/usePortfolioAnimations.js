import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const projectTransforms = [
  [[10, 40, -10, 10], [20, -10, -45, 20]],
  [[0, 47.5, -10, 15], [-25, 15, -45, 30]],
  [[0, 29.5, -10, 5], [-15, -5, -40, 60]],
  [[0, 40, -5, 80], [20, -10, 60, 5]],
  [[10, 35, -15, 30], [25, -15, 60, 95]],
  [[0, 50, 30, 80], [20, -10, 60, 5]],
];

export function usePortfolioAnimations(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const lenis = new Lenis();
    const media = gsap.matchMedia();
    const splitInstances = [];
    const ticker = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      const introTimeline = gsap.timeline();

      introTimeline
        .from("#header", {
          y: -10,
          opacity: 0,
          duration: 1.5,
          ease: "expo.in",
        })
        .to(".boundingelem", {
          y: 0,
          opacity: 1,
          ease: "expo.inOut",
          duration: 2,
          delay: -1,
          stagger: 0.6,
        })
        .from(".herofooter", {
          y: -10,
          opacity: 0,
          duration: 1.5,
          delay: -1,
          stagger: 0.3,
        });

      gsap.timeline({
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          pin: true,
        },
      })
        .fromTo(".profile-img", { left: "-70%" }, { left: "0%", ease: "power2.out" }, 0)
        .fromTo(".title-designer", { xPercent: 0 }, { xPercent: -5, ease: "power2.out" }, 0)
        .fromTo(".title-devloper", { xPercent: 0 }, { xPercent: 2, ease: "power2.out" }, 0);

      const revealText = root.querySelector(".reveal-text");

      if (revealText) {
        const split = new SplitType(revealText, { types: "chars" });
        splitInstances.push(split);

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: revealText,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          stagger: 0.1,
          color: "#222020",
        });
      }

      const cards = gsap.utils.toArray(".card");
      const heading = root.querySelector(".projects-section h1");

      if (cards.length) {
        ScrollTrigger.create({
          trigger: ".projects-section",
          start: "top top",
          end: () => `+=${window.innerHeight * 5}px`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;

            cards.forEach((card, index) => {
              const delay = index * 0.11258;
              const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

              if (cardProgress > 0) {
                const [yPositions, rotations] = projectTransforms[index];
                const cardX = gsap.utils.interpolate(25, -650, cardProgress);
                const yProgress = cardProgress * 3;
                const yIndex = Math.min(Math.floor(yProgress), yPositions.length - 2);
                const yInterpolation = yProgress - yIndex;
                const cardY = gsap.utils.interpolate(
                  yPositions[yIndex],
                  yPositions[yIndex + 1],
                  yInterpolation
                );
                const cardRotation = gsap.utils.interpolate(
                  rotations[yIndex],
                  rotations[yIndex + 1],
                  yInterpolation
                );

                gsap.set(card, {
                  xPercent: cardX,
                  yPercent: cardY,
                  rotation: cardRotation,
                  opacity: 1,
                });
              } else {
                gsap.set(card, { opacity: 0 });
              }
            });

            if (heading && progress > 0.8) {
              const headingProgress = gsap.utils.mapRange(0.8, 1, 0, 1, progress);

              gsap.set(heading, {
                yPercent: gsap.utils.interpolate(0, -20, headingProgress),
                opacity: gsap.utils.interpolate(1, 0, headingProgress),
              });
            } else if (heading) {
              gsap.set(heading, {
                yPercent: 0,
                opacity: 1,
              });
            }
          },
        });
      }

      media.add("(max-width: 767px)", () => {
        gsap.to(".services__content", {
          xPercent: -90,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000",
          },
        });
      });

      media.add("(min-width: 768px)", () => {
        gsap.to(".services__content", {
          xPercent: -64,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=2000",
          },
        });
      });
    }, root);

    ScrollTrigger.refresh();

    return () => {
      media.revert();
      context.revert();
      splitInstances.forEach((split) => split.revert());
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [rootRef]);
}

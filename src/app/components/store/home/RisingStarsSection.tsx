"use client";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";
import classes from "./Home.module.css";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    brands: ["Nautinati", "Nap Chief"],
    title: "Little Fashion, Big Smiles",
    subtitle: "Min. 50% Off",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    brands: ["Cutiekins", "StyloBug"],
    title: "Trendy Looks for Tiny Stars",
    subtitle: "Min. 60% Off",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    brands: ["Kuber Industries", "Haus Kinder Baby"],
    title: "Where Elegance Meets Comfort",
    subtitle: "Min. 65% Off",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    brands: ["GIVA", "PALMONAS"],
    title: "Shine Bright, Wear Beautiful",
    subtitle: "Min. 65% Off",
  },
];

export default function RisingStarsSection() {
  const autoplay = useMemo(() => Autoplay({ delay: 2000 }), []);

  return (
    <div className={classes.risingStarsWrapper}>
         <h2 className={classes.sectionTitle}>Rising Stars</h2>
      <Carousel
        classNames={classes}
        withIndicators
        height={340}
        type="container"
        slideSize={{ base: "100%", "300px": "50%", "500px": "33.333333%" }}
        slideGap={{ base: "md", "500px": "lg" }}
        emblaOptions={{ loop: true, align: "start" }}
        plugins={[autoplay]}
        onMouseEnter={() => autoplay.stop()}
        onMouseLeave={() => autoplay.play()}
      >
        {cards.map((card, index) => (
          <Carousel.Slide key={index}>
            <article className={classes.risingStarCard}>
              <div className={classes.cardImage}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className={classes.cardContent}>
                <div className={classes.brandRow}>
                  {card.brands.map((brand) => (
                    <span key={brand} className={classes.brandChip}>
                      {brand}
                    </span>
                  ))}
                </div>
                <h3 className={classes.cardTitle}>{card.title}</h3>
                <p className={classes.cardSubtitle}>{card.subtitle}</p>
              </div>
            </article>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

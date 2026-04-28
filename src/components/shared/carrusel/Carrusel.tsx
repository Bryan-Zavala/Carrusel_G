import { useState } from "react";
import styles from "./Carrusel.module.css";
import clsx from "clsx";

interface Image {
  src: string;
  alt: string;
}

interface CarruselProps {
  images: Image[];
}

export default function Carrusel({ images }: CarruselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <div className={styles.carruselContainer}>
      <div className={styles.carouselBox}>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={styles.image}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />

        <button
          onClick={handlePrev}
          className={clsx(styles.button, styles.left)}
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className={clsx(styles.button, styles.right)}
        >
          ❯
        </button>

        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={clsx(styles.dot, {
                [styles.dotActive]: index === currentIndex,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client"

import { useEffect, useState } from "react";

const words = [
  "Full-Stack Developer",
  "QA Analyst",
  "Aspiring Software Engineer",
];

export default function TypingEffect() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let delay = isDeleting ? 45 : 90;

    if (isDeleting && displayedText === currentWord) {
      delay = 1500;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        setDisplayedText((prevText) =>
          isDeleting
            ? prevText.slice(0, prevText.length - 1)
            : currentWord.substring(0, prevText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <span className="text-accent" aria-label={words[currentWordIndex]}>
      {displayedText}
      <span className="m1-1 inline-block animate-pulse" aria-hidden="true">
        |
      </span>
    </span>
  );
}
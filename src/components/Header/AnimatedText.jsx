function AnimatedText({ label }) {
  const letters = Array.from(label);

  return (
    <>
      {[0, 1].map((blockIndex) => (
        <div className="block" aria-hidden="true" key={`${label}-${blockIndex}`}>
          {letters.map((letter, index) => (
            <span className="letter" key={`${label}-${blockIndex}-${index}`}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default AnimatedText;

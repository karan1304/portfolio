const drops = Array.from({ length: 80 }, (_, index) => ({
  left: `${(index * 17 + 9) % 100}%`,
  duration: `${2.6 + (index % 5) * 0.35}s`,
  delay: `${-((index * 19) % 40) / 10}s`,
  height: `${22 + (index % 4) * 7}px`,
}))

export default function Rain() {
  return (
    <div className="rain-overlay" aria-hidden="true">
      {drops.map((drop, index) => (
        <span
          className="rain-drop"
          key={index}
          style={{
            '--rain-left': drop.left,
            '--rain-duration': drop.duration,
            '--rain-delay': drop.delay,
            '--rain-height': drop.height,
          }}
        />
      ))}
    </div>
  )
}

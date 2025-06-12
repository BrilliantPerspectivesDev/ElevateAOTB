import backgroundImage from '@/images/background-newsletter.png'

export function BackgroundImage({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bone/80 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bone/80 pointer-events-none" />
    </div>
  )
}

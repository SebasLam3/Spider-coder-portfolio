import { useInView } from '../hooks/useInView';

export function FadeInSection({ children, className = '' }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

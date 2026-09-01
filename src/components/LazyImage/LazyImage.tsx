import { useState, ImgHTMLAttributes } from "react";
import classes from "./LazyImage.module.css";

export const LazyImage = ({ src, alt, className, style, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`${className || ''} ${!loaded ? classes.skeleton : ''}`}
      style={{
        ...style,
        ...(!loaded ? { objectFit: 'none', objectPosition: '-99999px -99999px' } : {})
      }}
      {...props} 
    />
  );
};

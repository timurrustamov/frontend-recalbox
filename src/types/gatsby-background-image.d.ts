declare module 'gatsby-background-image' {
  import { ComponentType, CSSProperties } from 'react';

  export type BackgroundImageProps = {
    Tag?: string | ComponentType;
    className?: string;
    fluid: any;
    backgroundColor?: string;
    style?: CSSProperties;
  };
  const BackgroundImage: ComponentType<BackgroundImageProps>;

  export default BackgroundImage;
}

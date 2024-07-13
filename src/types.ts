// types.ts

export interface ImageCardData {
  id: string | number;
  urls: {
    regular: string;
    small: string;
  };
  altDescription: string;
}

export interface ImgClickProp {
  url: string;
  alt: string;
}

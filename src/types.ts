export interface ImageCardData {
  id: string | number;
  urls: {
    regular: string;
    small: string;
  };
  altDescription: string;
}

export type ImgClickProp = (url: string, alt: string) => void;

// types.ts

export interface ImageCardData {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
}

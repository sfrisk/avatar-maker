export interface CustomizableItemOptions {
  color: string;
  url: string;
  name: string;
}

export interface CustomizableItem {
  name: string;
  x: number;
  y: number;
  options: CustomizableItemOptions[];
}

export interface AvatarItem {
  name: string;
  url: string;
  items: CustomizableItem[];
}

export interface AvatarSelection {
  name: string;
  variant: {
    name: string;
    url: string;
    x: number;
    y: number;
  };
}

export interface RGBA {
  r: string;
  g: string;
  b: string;
  a: string;
}

export interface HSV {
  h: string;
  s: string;
  v: string;
}

export interface Color {
  rgba: RGBA;
  hsv: HSV;
  hex: string;
}

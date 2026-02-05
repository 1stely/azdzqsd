export enum Category {
  BURGERS = 'Burgers',
  LOADED_FRIES = 'Loaded Fries',
  SANDWICH = 'Sandwich',
  SIDES = 'Sides & Extras',
  DRINKS = 'Drinks',
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string | number; // String for variations like "S 350 / M 550"
  category: Category;
  image?: string;
  popular?: boolean;
}
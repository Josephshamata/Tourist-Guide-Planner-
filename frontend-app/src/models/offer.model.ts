export type Offer = {
  _id: string;
  title: string;
  slug: string;
  type: "signature" | "personality";
  imageUrl: string;
  totalPrice: number;
  days: number;
  mainPlaces: string[];
  hotelName: string;
  categories: string[];
  isPublished: boolean;
};
export interface dataType {
  id?: string;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  image?: string;
  isFeatured?: boolean;
}

export type iconsSize = "eventList" | "eventId";

export interface commentType {
  _id: string;
  comment: {
    eventId: string;
    email: string;
    name: string;
    comment: string;
  };
}

export type Category = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  slug: string;
  cover: string;
  sections: Section[];
};

export type Section = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  slug: string;
  cover: string;
  items: Item[];
};

export type Item = {
  _id: string;
  _createdAt: Date;
  name: string;
  description: string;
  price: number;
  slug: string;
  cover: string;
  variants?: Variant[];
};

export type Variant = {
  _id: string;
  _createdAt: Date;
  name: string;
  price: number;
};

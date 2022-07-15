export type DropDownCategory = {
  name: string;
  url: string;
  subcategories?: {
    name: string;
    url: string;
  }[];
};

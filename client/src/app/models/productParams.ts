export type ProductParams = {
  pageNumber: number;
  pageSize: number;
  brands: string[];
  types: string[];
  orderBy: string;
    searchTerm?: string;
}
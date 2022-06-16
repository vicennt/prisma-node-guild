export interface GenericResponse {
  data: any[];
  pagination: {
    total: number;
    resultLength: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
    from: number;
    to: number;
  };
}

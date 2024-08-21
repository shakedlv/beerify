interface PaginatedResult<T> {
    currentPage: number;
    numberOfPages: number;
    totalResults: number;
    data: T[];
}

export type PaginatedQuery = {
    page:number;
    pageSize:number;
    
}

export function paginate<T>(data: T[], page: number, pageSize: number): PaginatedResult<T> {
    const totalResults = data.length;
    const numberOfPages = Math.ceil(totalResults / pageSize);
    const start = (page - 1) * pageSize;
    const paginatedData = data.slice(start, start + pageSize);

    return {
        currentPage: page,
        numberOfPages,
        totalResults,
        data: paginatedData,
    };
}
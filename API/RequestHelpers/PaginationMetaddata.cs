using System;

namespace API.RequestHelpers;

public class PaginationMetaddata
{
    public int TotalCount { get; set; }
    public int PageSize { get; set; }
    public int CurrentPage { get; set; }
    public int TotalPages { get; set; }

    public PaginationMetaddata(int totalCount, int pageSize, int currentPage, int totalPages)
    {
        TotalCount = totalCount;
        PageSize = pageSize;
        CurrentPage = currentPage;
        TotalPages = totalPages;
    }
}

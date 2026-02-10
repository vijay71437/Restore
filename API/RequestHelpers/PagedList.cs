using System;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers;

public class PagedList<T> : List<T>
{
    public PaginationMetaddata Metadata { get; set; }

    public PagedList(List<T> items, int count, int pageNumber, int pageSize)
    {
       Metadata =new PaginationMetaddata(count, pageSize, pageNumber, (int)Math.Ceiling(count / (double)pageSize));
       AddRange(items);
    }
  
    public static async Task<PagedList<T>> ToPagedListAsync(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var count = await source.CountAsync();
        var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }
}
    
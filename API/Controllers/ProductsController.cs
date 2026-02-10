using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;

namespace API.Controllers
{

    public class ProductsController(StoreContext context) : BaseApiController   
    {
        private readonly StoreContext context = context;

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts([FromQuery]ProductParams productParams)
        {
          var query = context.Products
                .Sort(productParams.OrderBy)
                .Search(productParams.SearchTerm)
                .Filter(productParams.Brands, productParams.Types)
                .AsQueryable();

            var products = await PagedList<Product>.ToPagedListAsync(query,
                productParams.PageNumber, productParams.PageSize);

            Response.AddPaginationHeader(products.Metadata);

            return products;
        }
       
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id)
        {
            var product=await context.Products.FindAsync(id);
            if(product==null) return NotFound();
            return product;
        }

        [HttpGet("filters")]
        public async Task<ActionResult> GetFilters()
        {
            var brands=await context.Products.Select(p=>p.Brand).Distinct().ToListAsync();
            var types=await context.Products.Select(p=>p.Type).Distinct().ToListAsync();
            return Ok(new {Brands=brands,Types=types});
        }

    }
}

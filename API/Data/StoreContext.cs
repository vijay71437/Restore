
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products{get;set;}
    public required DbSet<Basket> Baskets{get;set;}

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole{Id="565655e6-2a21-4ea3-b4bc-93e37bb0225c", ConcurrencyStamp="Member",Name="Member",NormalizedName="MEMBER"},
            new IdentityRole{Id="80890083-edde-42a1-9da9-ce25a54b81b6", ConcurrencyStamp="Admin",Name="Admin",NormalizedName="ADMIN"}
        ); 
    }
}

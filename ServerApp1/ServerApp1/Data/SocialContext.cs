using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServerApp1.Models;

namespace ServerApp1.Data
{
    public class SocialContext: IdentityDbContext<User, Role, int>
    {
        public SocialContext(DbContextOptions<SocialContext> options): base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}

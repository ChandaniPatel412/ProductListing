using DataAccess.Configurations;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class ProductsDBContext : DbContext
    {
        public ProductsDBContext(DbContextOptions<ProductsDBContext> options)
        : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductEntityConfiguration());
        }
    }
}

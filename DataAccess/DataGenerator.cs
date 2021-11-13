using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class DataGenerator
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new ProductsDBContext(
                serviceProvider.GetRequiredService<DbContextOptions<ProductsDBContext>>()))
            {
                // Look for any products.
                if (context.Products.Any())
                {
                    return;   // Data was already seeded
                }

                context.Products.AddRange(
                    new Product
                    {
                        ProductId = 1,
                        Name = "Grand Theft Auto V - PlayStation 3",
                        Description = "Comes in original case with manual. Game is in excellent condition.",
                        Price = Convert.ToDecimal(19.99),
                        IsPublished = true
                    },
                    new Product
                    {
                        ProductId = 2,
                        Name = "Grand Theft Auto V - PlayStation 5",
                        Description = "Comes in original case with manual. Game is in excellent condition.",
                        Price = Convert.ToDecimal(39.99),
                        IsPublished = false
                    });
                
                context.SaveChanges();
            }
        }
    }
}

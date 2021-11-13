using BusinessLayer.IRepositories;
using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ProductsDBContext _context;
        private readonly ILogger<ProductRepository> _logger;

        public ProductRepository(ProductsDBContext context, ILogger<ProductRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<List<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetProductAsync(int productId)
        {
            return await _context.Products.FindAsync(productId);
        }
    }
}

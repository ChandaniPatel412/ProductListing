using BusinessLayer.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using BusinessLayer.IRepositories;
using DataAccess.Models;

namespace BusinessLayer.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductService> _logger;

        public ProductService(IProductRepository productRepository, ILogger<ProductService> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        public List<Product> GetProducts()
        {
            return _productRepository.GetProductsAsync().Result;
        }
    }
}

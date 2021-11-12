using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductListing.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            Product[] productArray = new Product[1]
            {
                new Product(){
                    ProductId = 1,
                    Name = "Grand Theft Auto V - PlayStation 3",
                    Description = "Comes in original case with manual. Game is in excellent condition.",
                    Price = Convert.ToDecimal(19.99),
                    IsPublished = true
                }
            };
            return productArray;
        }
    }
}

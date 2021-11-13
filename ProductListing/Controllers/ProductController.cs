using BusinessLayer.IServices;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductListing.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductService productService, ILogger<ProductController> logger)
        {
            _productService = productService;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = _productService.GetProducts();
                return Ok(result);
            }
            catch(Exception ex)
            {
                _logger.LogError("Error Product/Get -> Get API Error Details: {0}", ex);
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}

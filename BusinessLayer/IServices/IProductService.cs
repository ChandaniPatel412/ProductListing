using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.IServices
{
    public interface IProductService
    {
        List<Product> GetProducts();
        Product GetProduct(int productId);
    }
}

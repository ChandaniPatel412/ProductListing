using BusinessLayer.IServices;
using BusinessLayer.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductListing.Configuration
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();

            return services;
        }
    }
}

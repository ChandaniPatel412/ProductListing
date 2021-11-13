using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;


namespace DataAccess.Configurations
{
    public class ProductEntityConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        { 
            builder.HasKey(b => b.ProductId);
        }
    }
}

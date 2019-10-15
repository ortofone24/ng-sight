﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_test_app.API.Models
{
    public class Order
    {
        public int Id { get; set; }
        public Customer Customer { get; set; }
        public decimal Total { get; set; }
        public DateTime Placed { get; set; }
        public DateTime? Completed { get; set; }
    }
}

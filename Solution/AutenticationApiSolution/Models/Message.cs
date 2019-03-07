using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationApiSolution.Models
{
    public class Message
    {
        public bool Succeeded { get; set; }
        public List<object> Errors { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationApiSolution.Models.Authentication

{
    public class SignInModel
    {
        [Required(ErrorMessage = "Necessário o login")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Senha necessária")]
        public string Password { get; set; }
    }
}

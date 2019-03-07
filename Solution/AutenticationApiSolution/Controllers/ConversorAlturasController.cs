using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AuthenticationApiSolution.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AuthenticationApiSolution.Controllers
{
    [Route("api/[controller]")]
    public class ConversorAlturasController : Controller
    {
        [Authorize("App")]
        [HttpGet("PesMetros/{alturaPes}")]
        public object Get(double alturaPes)
        {

            ClaimsPrincipal user = this.User;

            return new
            {
                AlturaPes = alturaPes,
                AlturaMetros = Math.Round(alturaPes * 0.3048, 4),
               
            };
        }

        [Authorize("Bearer")]
        [HttpGet("acesso")]
        public object GetAcesso(double alturaPes)
        {

            ClaimsPrincipal user = this.User;

            return new
            {
                User = user.Identity.Name,
                Msg = "Deu certo!"

            };
        }
    }
}

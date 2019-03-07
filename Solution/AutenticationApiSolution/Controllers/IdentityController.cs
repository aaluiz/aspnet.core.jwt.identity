using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AuthenticationApiSolution.Data;
using AuthenticationApiSolution.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AuthenticationApiSolution.Controllers
{
    [Route("api/[controller]")]
    [Authorize("App")]
    public class IdentityController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public IdentityController(ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        // GET: api/<controller>
        [HttpGet("contas")]
        public object GetContas([FromServices]UserManager<ApplicationUser> userManager)
        {
            var users = from u in _context.Users
                        select new
                        {
                            id = u.Id,
                            username = u.UserName,
                            email = u.Email
                        };

            return users;
        }

        // GET api/<controller>/5
        [HttpGet("funcoes")]
        public object GetFuncoes()
        {

            var roles = from r in _context.Roles
                        select new
                        {
                            id = r.Id,
                            name = r.Name
                        };

            return roles;
        }

        [HttpPost("create/user")]
        public object CreateUser([FromBody]User user)
        {
          return CreateUser(
                new ApplicationUser()
                {
                    UserName = user.UserID,
                    Email = user.Email,
                    EmailConfirmed = true
                },  user.Password, Roles.ROLE_API);
        }

        [HttpPost("create/role/{roleName}")]
        public object CreateRole(string roleName)
        {
            var result = _roleManager.CreateAsync(new IdentityRole(roleName)).Result;
            return result;
        }

        private object CreateUser(
            ApplicationUser user,
            string password,
            string initialRole = null)
        {
            var result = new Message();

            if (_userManager.FindByNameAsync(user.UserName).Result == null)
            {
                var resultado = _userManager
                    .CreateAsync(user, password).Result;

                if (resultado.Succeeded &&
                    !string.IsNullOrWhiteSpace(initialRole))
                {
                    _userManager.AddToRoleAsync(user, initialRole).Wait();
                }

                return resultado;
            }

            Message message = new Message
            {
                Succeeded = false,
                Errors = new List<object>()
            };

            message.Errors.Add("Usuário já existe!");


            return message;
        }

    }
}

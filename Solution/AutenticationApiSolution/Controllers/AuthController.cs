using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AuthenticationApiSolution.Models.Authentication;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using AuthenticationApiSolution.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AuthenticationApiSolution.Controllers
{
    public class AuthController : Controller
    {
        [Route("auth")]
        public class AuthenticationController : Controller
        {
            private IUserService _userService;


            public AuthenticationController(IUserService userService)
            {
                _userService = userService;

            }

            [Route("signin")]
            public IActionResult SignIn()
            {
                return View(new SignInModel());
            }

            [Route("signin")]
            [HttpPost]
            [ValidateAntiForgeryToken]
            public async Task<IActionResult> SignIn(SignInModel model, string returnUrl = null)
            {
                string mensagem = string.Empty;
                try
                {
                    if (ModelState.IsValid)
                    {
                        if (await _userService.ValidateCredentials(model.UserName, model.Password, out User user))
                        {



                            await SignInUser(user.Username, user.Grupos, user.Email, user.Logon, user.CentroCusto);
                            if (returnUrl != null)
                            {
                                return Redirect(returnUrl);
                            }
                            return RedirectToAction("Index", "Home");
                        }
                        else
                        {
                            mensagem = "Login ou senha Inválida";
                        }

                    }
                }
                catch
                {
                    mensagem = "Erro de autenticação";
                }

                ViewData["MensagemRetorno"] = mensagem;

                return View(model);
            }

            [Route("signout")]
            public async Task<IActionResult> SignOut()
            {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                return RedirectToAction("SignIn", "Authentication");
            }


            private async Task SignInUser(string username, List<string> grupos, string email, string logon, int centroCusto)
            {
                try
                {

                    //  new Claim(ClaimTypes.GroupSid,grupo ),
                    var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, username),
                    new Claim("name",username),
                    new Claim("email",email),
                    new Claim("logon",logon),
                };

                    foreach (var g in grupos)
                    {
                        claims.Add(new Claim(ClaimTypes.GroupSid, g));
                        claims.Add(new Claim("grupo", g));
                    }

                    var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme, "name", "grupo");
                    var principal = new ClaimsPrincipal(identity);

                    await HttpContext.SignInAsync(principal);
                }
                catch (System.Exception e)
                {

                    throw e;
                }

            }

        }
    }
}

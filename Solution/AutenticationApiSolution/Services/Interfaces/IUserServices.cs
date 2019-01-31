using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationApiSolution.Services
{
    public interface IUserService
    {
        Task<bool> ValidateCredentials(string username, string password, out User user);
   
    }

    public class User
    {
        public User(string username, List<string> grupo, string email, string logon)
        {
            Username = username;
            Grupos = grupo;
            Email = email;
            Logon = logon;
        }

        public static object Claims { get; internal set; }
        public string Username { get; }
        public string Logon { get; set; }
        public int CentroCusto { get; private set; }
        public List<string> Grupos { get; }
        public string Email { get; }

    }
}

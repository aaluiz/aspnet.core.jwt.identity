using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationApiSolution.Policies
{
    public class IssuerRequeriment: IAuthorizationRequirement
    {
        public string Audience { get; private set; }

        public IssuerRequeriment(string audience)
        {
            Audience = audience;
        }
    }
}

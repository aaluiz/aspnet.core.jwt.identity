using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AuthenticationApiSolution.Policies
{
    public class IssuerHandler : AuthorizationHandler<IssuerRequeriment>
    {
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, IssuerRequeriment requirement)
        {

            var user = context.User;
           if( user.HasClaim(c => c.Type == "iss" && c.Value == requirement.Audience)){
                context.Succeed(requirement);
            }





            return Task.CompletedTask;
        }
    }
}

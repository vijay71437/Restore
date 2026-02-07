using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middleware;

public class ExceptionMidddleware(IHostEnvironment env,ILogger<ExceptionMidddleware> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context); 
        }
        catch (Exception ex)
        {
           await HanddleException(context,ex);
        }
        
    }

    private async Task HanddleException(HttpContext context, Exception ex)
    {
        logger.LogError(ex, ex.Message);
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Response.ContentType = "application/json";
        var response =new ProblemDetails
        {
            Status = context.Response.StatusCode,
            Detail = env.IsDevelopment() ? ex.StackTrace?.ToString() : null,
            Title = ex.Message
        };
        var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
        var json = JsonSerializer.Serialize(response, options);
        await context.Response.WriteAsync(json);
    }
}

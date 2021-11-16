using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using System.Text.Json;
using Microsoft.Net.Http.Headers;
using System.Net.Http;
using Weather.Models;

namespace Weather.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;
        public WeatherController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet]
        [EnableCors("AllowOrigin")]
        public async Task<IActionResult> GetWeather()
        {
            double longitude = 11.9659;
            double latitude = 57.6984;
            HttpClient client = _clientFactory.CreateClient("API Client");
            client.DefaultRequestHeaders.Add(HeaderNames.UserAgent, "WeatherData");

            var response = await client.GetAsync("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + latitude + "&lon=" + longitude);
            response.EnsureSuccessStatusCode();
            var responseBody = response.Content.ReadAsStreamAsync();
            if (response.IsSuccessStatusCode)
            {
                var repositories = await JsonSerializer.DeserializeAsync<Root>(await responseBody);

                return Ok(repositories);
            }

            return null;
        }
    }
}

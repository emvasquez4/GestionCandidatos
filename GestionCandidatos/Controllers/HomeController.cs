using GestionCandidatos.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace GestionCandidatos.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration configuration;




        public HomeController(ILogger<HomeController> logger, IConfiguration _configuration)
        {
            _logger = logger;
             _configuration = configuration;
        }

        public IActionResult Index()
        {
            ViewBag.GestionApi = configuration.GetValue<string>("GestionCandidatosApi");
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

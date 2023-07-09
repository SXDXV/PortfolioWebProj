using Microsoft.AspNetCore.Mvc;
using PortfolioWebProj.Models;
using System.Diagnostics;

namespace PortfolioWebProj.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Main()
        {
            return View();
        }

        public IActionResult Design()
        {
            return View();
        }

        public IActionResult Programming()
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
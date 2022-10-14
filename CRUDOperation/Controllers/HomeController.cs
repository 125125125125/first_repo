using CRUDOperation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDOperation.Controllers
{
    public class HomeController : Controller
    {
        MyDbContext _db=new MyDbContext();
        [HttpGet]
        public ActionResult AddEmployee()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddEmployee(tbl_Emp emp)
        {
            _db.tbl_Emp.Add(emp);
            _db.SaveChanges();
            return View();
        }
        [HttpPost]
        public ActionResult DeleteEmployee(tbl_Emp emp)
        {
            emp = _db.tbl_Emp.Where(x => x.EmpID == emp.EmpID).FirstOrDefault();
            _db.tbl_Emp.Remove(emp);
            _db.SaveChanges();
            return RedirectToAction(nameof(AddEmployee));
        }
        [HttpGet]
        public JsonResult EmployeeList()
        {
            return Json(_db.tbl_Emp.ToList(), JsonRequestBehavior.AllowGet);
        }
    }
}
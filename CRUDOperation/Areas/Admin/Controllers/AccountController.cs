using CRUDOperation.Areas.Admin.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDOperation.Areas.Admin.Controllers
{
    [RouteArea("Admin")]
    public class AccountController : Controller
    {
        MyEntityContext db = new MyEntityContext();
        public ActionResult Employees()
        {
            EmployeeViewModel empModel = new EmployeeViewModel();
            empModel.EmpList = db.tbl_Emp.ToList();
            return View(empModel);
        }

        public ActionResult StudentInfo()
        {
            //var MyData = db.tbl_Student.ToList(); // student list
            //var MyData = db.tbl_CourseInfo.ToList(); // course info list
            // select * from tbl_Student s join tbl_CourseInfo c on s.CourseInfoID=c.CourseInfoID
            List<MyModel> MyData = (from s in db.tbl_Student
                          join c in db.tbl_CourseInfo on s.CourseInfoID equals c.CourseInfoID
                          select new MyModel
                          {
                              MyCourses = c,
                              MyStudents = s
                          }).ToList() ;
            return View(MyData);
        }
    }
}
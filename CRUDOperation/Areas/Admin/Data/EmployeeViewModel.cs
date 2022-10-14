using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDOperation.Areas.Admin.Data
{
    public class EmployeeViewModel:tbl_Emp
    {
        public IEnumerable<tbl_Emp> EmpList { get; set; }
    }
}
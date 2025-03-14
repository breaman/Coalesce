using IntelliTect.Coalesce;
using IntelliTect.Coalesce.Mapping;
using IntelliTect.Coalesce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace Coalesce.Web.Models
{
    public partial class CompanyDtoGen : GeneratedDto<Coalesce.Domain.Company>
    {
        public CompanyDtoGen() { }

        private int? _CompanyId;
        private string _Name;
        private string _Address1;
        private string _Address2;
        private string _City;
        private string _State;
        private string _ZipCode;
        private bool? _IsDeleted;
        private System.Collections.Generic.ICollection<Coalesce.Web.Models.PersonDtoGen> _Employees;
        private string _AltName;

        public int? CompanyId
        {
            get => _CompanyId;
            set { _CompanyId = value; Changed(nameof(CompanyId)); }
        }
        public string Name
        {
            get => _Name;
            set { _Name = value; Changed(nameof(Name)); }
        }
        public string Address1
        {
            get => _Address1;
            set { _Address1 = value; Changed(nameof(Address1)); }
        }
        public string Address2
        {
            get => _Address2;
            set { _Address2 = value; Changed(nameof(Address2)); }
        }
        public string City
        {
            get => _City;
            set { _City = value; Changed(nameof(City)); }
        }
        public string State
        {
            get => _State;
            set { _State = value; Changed(nameof(State)); }
        }
        public string ZipCode
        {
            get => _ZipCode;
            set { _ZipCode = value; Changed(nameof(ZipCode)); }
        }
        public bool? IsDeleted
        {
            get => _IsDeleted;
            set { _IsDeleted = value; Changed(nameof(IsDeleted)); }
        }
        public System.Collections.Generic.ICollection<Coalesce.Web.Models.PersonDtoGen> Employees
        {
            get => _Employees;
            set { _Employees = value; Changed(nameof(Employees)); }
        }
        public string AltName
        {
            get => _AltName;
            set { _AltName = value; Changed(nameof(AltName)); }
        }

        /// <summary>
        /// Map from the domain object to the properties of the current DTO instance.
        /// </summary>
        public override void MapFrom(Coalesce.Domain.Company obj, IMappingContext context, IncludeTree tree = null)
        {
            if (obj == null) return;
            var includes = context.Includes;

            // Fill the properties of the object.

            this.CompanyId = obj.CompanyId;
            this.Name = obj.Name;
            this.Address1 = obj.Address1;
            this.Address2 = obj.Address2;
            this.City = obj.City;
            this.State = obj.State;
            this.ZipCode = obj.ZipCode;
            this.IsDeleted = obj.IsDeleted;
            this.AltName = obj.AltName;
            var propValEmployees = obj.Employees;
            if (propValEmployees != null && (tree == null || tree[nameof(this.Employees)] != null))
            {
                this.Employees = propValEmployees
                    .OrderBy(f => f.PersonId)
                    .Select(f => f.MapToDto<Coalesce.Domain.Person, PersonDtoGen>(context, tree?[nameof(this.Employees)])).ToList();
            }
            else if (propValEmployees == null && tree?[nameof(this.Employees)] != null)
            {
                this.Employees = new PersonDtoGen[0];
            }

        }

        /// <summary>
        /// Map from the current DTO instance to the domain object.
        /// </summary>
        public override void MapTo(Coalesce.Domain.Company entity, IMappingContext context)
        {
            var includes = context.Includes;

            if (OnUpdate(entity, context)) return;

            if (ShouldMapTo(nameof(CompanyId))) entity.CompanyId = (CompanyId ?? entity.CompanyId);
            if (ShouldMapTo(nameof(Name))) entity.Name = Name;
            if (ShouldMapTo(nameof(Address1))) entity.Address1 = Address1;
            if (ShouldMapTo(nameof(Address2))) entity.Address2 = Address2;
            if (ShouldMapTo(nameof(City))) entity.City = City;
            if (ShouldMapTo(nameof(State))) entity.State = State;
            if (ShouldMapTo(nameof(ZipCode))) entity.ZipCode = ZipCode;
            if (ShouldMapTo(nameof(IsDeleted))) entity.IsDeleted = (IsDeleted ?? entity.IsDeleted);
        }
    }
}

    using IntelliTect.Coalesce.Interfaces;
    using IntelliTect.Coalesce.Mapping;
    using IntelliTect.Coalesce.Models;
    using IntelliTect.Coalesce.Helpers.IncludeTree;
    using Newtonsoft.Json;
    using System;
    using System.Linq;
    using System.Linq.Dynamic;
    using System.Collections.Generic;
    using System.Security.Claims;
    using Coalesce.Web.Models;
    using Coalesce.Domain;
    using Coalesce.Domain.External;

using static Coalesce.Domain.Person;

namespace Coalesce.Web.Models
{
    public partial class PersonDtoGen : GeneratedDto<Coalesce.Domain.Person, PersonDtoGen>
        , IClassDto<Coalesce.Domain.Person, PersonDtoGen>
        {
        public PersonDtoGen() { }

             public Int32? PersonId { get; set; }
             public Titles? Title { get; set; }
             public String FirstName { get; set; }
             public String LastName { get; set; }
             public String Email { get; set; }
             public Genders? Gender { get; set; }
             public ICollection<CaseDtoGen> CasesAssigned { get; set; }
             public ICollection<CaseDtoGen> CasesReported { get; set; }
             public Nullable<DateTime> BirthDate { get; set; }
             public Nullable<DateTime> LastBath { get; set; }
             public Nullable<DateTimeOffset> NextUpgrade { get; set; }
             public Nullable<Int32> PersonStatsId { get; set; }
             public PersonStatsDtoGen PersonStats { get; set; }
             public TimeZoneInfo TimeZone { get; set; }
             public String Name { get; set; }
             public Int32? CompanyId { get; set; }
             public CompanyDtoGen Company { get; set; }

        // Create a new version of this object or use it from the lookup.
        public static PersonDtoGen Create(Coalesce.Domain.Person obj, ClaimsPrincipal user = null, string includes = null,
                                   Dictionary<object, object> objects = null, IncludeTree tree = null) {
            // Return null of the object is null;
            if (obj == null) return null;
                        
            if (objects == null) objects = new Dictionary<object, object>();

            includes = includes ?? "";

            // Applicable includes for Person
            

            // Applicable excludes for Person
            

            // Applicable roles for Person
            bool isAdmin = false;
			if (user != null)
			{
				isAdmin = user.IsInRole("Admin");
			}



            // See if the object is already created, but only if we aren't restricting by an includes tree.
            // If we do have an IncludeTree, we know the exact structure of our return data, so we don't need to worry about circular refs.
            if (tree == null && objects.ContainsKey(obj)) 
                return (PersonDtoGen)objects[obj];

            var newObject = new PersonDtoGen();
            if (tree == null) objects.Add(obj, newObject);
            // Fill the properties of the object.
            newObject.PersonId = obj.PersonId;
            newObject.Title = obj.Title;
            newObject.FirstName = obj.FirstName;
            newObject.LastName = obj.LastName;
            newObject.Email = obj.Email;
            if ((isAdmin))
            {
                newObject.Gender = obj.Gender;
            }
            newObject.BirthDate = obj.BirthDate;
            newObject.LastBath = obj.LastBath;
            newObject.NextUpgrade = obj.NextUpgrade;
            newObject.PersonStatsId = obj.PersonStatsId;
            newObject.TimeZone = obj.TimeZone;
            newObject.Name = obj.Name;
            newObject.CompanyId = obj.CompanyId;
            if (obj.CasesAssigned != null && (tree == null || tree[nameof(newObject.CasesAssigned)] != null)) {
                newObject.CasesAssigned = obj.CasesAssigned.OrderBy("CaseKey ASC").Select(f => CaseDtoGen.Create(f, user, includes, objects, tree?[nameof(newObject.CasesAssigned)])).ToList();
            } else if (obj.CasesAssigned == null && tree?[nameof(newObject.CasesAssigned)] != null) {
                newObject.CasesAssigned = new CaseDtoGen[0];
            }

            if (obj.CasesReported != null && (tree == null || tree[nameof(newObject.CasesReported)] != null)) {
                newObject.CasesReported = obj.CasesReported.OrderBy("CaseKey ASC").Select(f => CaseDtoGen.Create(f, user, includes, objects, tree?[nameof(newObject.CasesReported)])).ToList();
            } else if (obj.CasesReported == null && tree?[nameof(newObject.CasesReported)] != null) {
                newObject.CasesReported = new CaseDtoGen[0];
            }

            
                newObject.PersonStats = PersonStatsDtoGen.Create(obj.PersonStats, user, includes, objects, tree?[nameof(newObject.PersonStats)]);

            if (tree == null || tree[nameof(newObject.Company)] != null)
                newObject.Company = CompanyDtoGen.Create(obj.Company, user, includes, objects, tree?[nameof(newObject.Company)]);

            return newObject;
        }

        // Instance constructor because there is no way to implement a static interface in C#. And generic constructors don't take arguments.
        public PersonDtoGen CreateInstance(Coalesce.Domain.Person obj, ClaimsPrincipal user = null, string includes = null,
                                Dictionary<object, object> objects = null, IncludeTree tree = null) {
            return Create(obj, user, includes, objects, tree);
        }

        // Updates an object from the database to the state handed in by the DTO.
        public void Update(Coalesce.Domain.Person entity, ClaimsPrincipal user = null, string includes = null)
        {
            includes = includes ?? "";

            if (OnUpdate(entity, user, includes)) return;

            // Applicable includes for Person
            

            // Applicable excludes for Person
            

            // Applicable roles for Person
            bool isAdmin = false;
			if (user != null)
			{
				isAdmin = user.IsInRole("Admin");
			}

			entity.Title = (Titles)(Title ?? 0);
			entity.FirstName = FirstName;
          if ((isAdmin))
            {
                entity.LastName = LastName;
            }
			entity.Email = Email;
			entity.BirthDate = BirthDate;
			entity.LastBath = LastBath;
			entity.NextUpgrade = NextUpgrade;
			entity.PersonStatsId = PersonStatsId;
			entity.TimeZone = TimeZone;
			entity.CompanyId = (Int32)(CompanyId ?? 0);
        }

	}
}

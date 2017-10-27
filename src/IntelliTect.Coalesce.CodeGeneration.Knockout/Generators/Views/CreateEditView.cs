﻿using IntelliTect.Coalesce.CodeGeneration.Generation;
using IntelliTect.Coalesce.TypeDefinition;
using System;
using System.Collections.Generic;
using System.Text;
using IntelliTect.Coalesce.CodeGeneration.Templating;
using IntelliTect.Coalesce.CodeGeneration.Templating.Razor;

namespace IntelliTect.Coalesce.CodeGeneration.Knockout.Generators
{
    public class CreateEditView : RazorTemplateGenerator<ClassViewModel>
    {
        public CreateEditView(RazorTemplateServices razorServices) : base(razorServices) { }

        public override TemplateDescriptor Template =>
            new TemplateDescriptor("Templates", "CreateEditView.cshtml");
    }
}

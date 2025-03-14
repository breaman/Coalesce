﻿// <auto-generated />
using System;
using Coalesce.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Coalesce.Domain.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Coalesce.Domain.Case", b =>
                {
                    b.Property<int>("CaseKey")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AssignedToId");

                    b.Property<byte[]>("AttachmentHash")
                        .HasMaxLength(32);

                    b.Property<string>("AttachmentName");

                    b.Property<long>("AttachmentSize");

                    b.Property<string>("AttachmentType");

                    b.Property<string>("Description");

                    b.Property<int?>("DevTeamAssignedId");

                    b.Property<TimeSpan>("Duration");

                    b.Property<DateTimeOffset>("OpenedAt");

                    b.Property<int?>("ReportedById");

                    b.Property<string>("Severity");

                    b.Property<int>("Status");

                    b.Property<string>("Title");

                    b.HasKey("CaseKey");

                    b.HasIndex("AssignedToId");

                    b.HasIndex("ReportedById");

                    b.ToTable("Case");
                });

            modelBuilder.Entity("Coalesce.Domain.Case+CaseAttachmentContent", b =>
                {
                    b.Property<int>("CaseKey")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("Content")
                        .IsRequired();

                    b.HasKey("CaseKey");

                    b.ToTable("Case");
                });

            modelBuilder.Entity("Coalesce.Domain.CaseProduct", b =>
                {
                    b.Property<int>("CaseProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CaseId");

                    b.Property<int>("ProductId");

                    b.HasKey("CaseProductId");

                    b.HasIndex("CaseId");

                    b.HasIndex("ProductId");

                    b.ToTable("CaseProduct");
                });

            modelBuilder.Entity("Coalesce.Domain.Company", b =>
                {
                    b.Property<int>("CompanyId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address1");

                    b.Property<string>("Address2");

                    b.Property<string>("City");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("Name");

                    b.Property<string>("State");

                    b.Property<string>("ZipCode");

                    b.HasKey("CompanyId");

                    b.ToTable("Company");
                });

            modelBuilder.Entity("Coalesce.Domain.Log", b =>
                {
                    b.Property<int>("LogId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Level");

                    b.Property<string>("Message");

                    b.HasKey("LogId");

                    b.ToTable("Logs");
                });

            modelBuilder.Entity("Coalesce.Domain.Person", b =>
                {
                    b.Property<int>("PersonId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("BirthDate");

                    b.Property<int>("CompanyId");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName")
                        .HasMaxLength(75);

                    b.Property<int>("Gender");

                    b.Property<DateTime?>("LastBath");

                    b.Property<string>("LastName")
                        .HasMaxLength(100);

                    b.Property<DateTimeOffset?>("NextUpgrade");

                    b.Property<byte[]>("ProfilePic");

                    b.Property<int?>("Title");

                    b.HasKey("PersonId");

                    b.HasIndex("CompanyId");

                    b.ToTable("Person");
                });

            modelBuilder.Entity("Coalesce.Domain.Product", b =>
                {
                    b.Property<int>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.Property<Guid>("UniqueId")
                        .HasColumnName("ProductUniqueId");

                    b.HasKey("ProductId");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("Coalesce.Domain.ZipCode", b =>
                {
                    b.Property<string>("Zip");

                    b.Property<string>("State");

                    b.HasKey("Zip");

                    b.ToTable("ZipCodes");
                });

            modelBuilder.Entity("Coalesce.Domain.Case", b =>
                {
                    b.HasOne("Coalesce.Domain.Person", "AssignedTo")
                        .WithMany("CasesAssigned")
                        .HasForeignKey("AssignedToId");

                    b.HasOne("Coalesce.Domain.Person", "ReportedBy")
                        .WithMany("CasesReported")
                        .HasForeignKey("ReportedById");
                });

            modelBuilder.Entity("Coalesce.Domain.Case+CaseAttachmentContent", b =>
                {
                    b.HasOne("Coalesce.Domain.Case")
                        .WithOne("AttachmentContent")
                        .HasForeignKey("Coalesce.Domain.Case+CaseAttachmentContent", "CaseKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Coalesce.Domain.CaseProduct", b =>
                {
                    b.HasOne("Coalesce.Domain.Case", "Case")
                        .WithMany("CaseProducts")
                        .HasForeignKey("CaseId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Coalesce.Domain.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Coalesce.Domain.Person", b =>
                {
                    b.HasOne("Coalesce.Domain.Company", "Company")
                        .WithMany("Employees")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Coalesce.Domain.Product", b =>
                {
                    b.OwnsOne("Coalesce.Domain.ProductDetails", "Details", b1 =>
                        {
                            b1.Property<int>("ProductId")
                                .ValueGeneratedOnAdd()
                                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                            b1.HasKey("ProductId");

                            b1.ToTable("Product");

                            b1.HasOne("Coalesce.Domain.Product")
                                .WithOne("Details")
                                .HasForeignKey("Coalesce.Domain.ProductDetails", "ProductId")
                                .OnDelete(DeleteBehavior.Cascade);

                            b1.OwnsOne("Coalesce.Domain.StreetAddress", "CompanyHqAddress", b2 =>
                                {
                                    b2.Property<int>("ProductDetailsProductId")
                                        .ValueGeneratedOnAdd()
                                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                                    b2.Property<string>("Address");

                                    b2.Property<string>("City");

                                    b2.Property<string>("PostalCode");

                                    b2.Property<string>("State");

                                    b2.HasKey("ProductDetailsProductId");

                                    b2.ToTable("Product");

                                    b2.HasOne("Coalesce.Domain.ProductDetails")
                                        .WithOne("CompanyHqAddress")
                                        .HasForeignKey("Coalesce.Domain.StreetAddress", "ProductDetailsProductId")
                                        .OnDelete(DeleteBehavior.Cascade);
                                });

                            b1.OwnsOne("Coalesce.Domain.StreetAddress", "ManufacturingAddress", b2 =>
                                {
                                    b2.Property<int>("ProductDetailsProductId")
                                        .ValueGeneratedOnAdd()
                                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                                    b2.Property<string>("Address");

                                    b2.Property<string>("City");

                                    b2.Property<string>("PostalCode");

                                    b2.Property<string>("State");

                                    b2.HasKey("ProductDetailsProductId");

                                    b2.ToTable("Product");

                                    b2.HasOne("Coalesce.Domain.ProductDetails")
                                        .WithOne("ManufacturingAddress")
                                        .HasForeignKey("Coalesce.Domain.StreetAddress", "ProductDetailsProductId")
                                        .OnDelete(DeleteBehavior.Cascade);
                                });
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

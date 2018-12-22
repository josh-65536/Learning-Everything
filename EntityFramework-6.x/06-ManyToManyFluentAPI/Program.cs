using System;
using System.Collections.Generic;
using System.Data.Entity;

class Playlist
{
    public int ID { get; set; }
    public string Title { get; set; }
    public ICollection<Video> Videos { get; set; }
}

class Video
{
    public int ID { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
}

class MyContext : DbContext
{
    public MyContext() : base(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MyTestDb;Trusted_Connection=True") { }

    public DbSet<Video> Videos { get; set; }
    public DbSet<Playlist> Playlists { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Playlist>().HasKey(p => p.ID);
        modelBuilder.Entity<Playlist>().HasMany(p => p.Videos).WithMany();
    }
}

class Program
{
    static void Main(string[] args)
    {
        var context = new MyContext();

        var videos = new Video[]
        {
            new Video { Title = "Hello World Entity Framework", Description = "Learn about the Entity Framework." },
            new Video { Title = "Beginning CRUD", Description = "Learn the meaning of CRUD." },
        };

        var playlists = new Playlist[]
        {
            new Playlist
            {
                Title = "Tutorials",
                Videos = new List<Video>(videos)
            },
            new Playlist
            {
                Title = "Object-Relational Mapping",
                Videos = new List<Video>(videos)
            }
        };

        context.Videos.AddRange(videos);
        context.Playlists.AddRange(playlists);
        context.SaveChanges();

        Console.WriteLine("Done.");
        Console.ReadKey();
    }
}

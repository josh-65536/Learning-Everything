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

        var playlist = new Playlist
        {
            Title = "Tutorials",
            Videos = new List<Video>(videos)
        };

        context.Videos.AddRange(videos);
        context.Playlists.Add(playlist);
        context.SaveChanges();

        Console.WriteLine("Done.");
        Console.ReadKey();
    }
}
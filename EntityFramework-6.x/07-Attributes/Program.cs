using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

class Playlist
{
    [Key]
    public int ID { get; set; }

    [Required]
    [MaxLength(49)]
    public string Title { get; set; }

    [InverseProperty("ContainingPlaylist")]
    public ICollection<Video> Videos { get; set; }
}

class Video
{
    [Key]
    public int ID { get; set; }

    [Required]
    [MaxLength(49)]
    public string Title { get; set; }

    [MaxLength(255)]
    public string Description { get; set; }

    public int? ContainingPlaylistID { get; set; }

    [ForeignKey(nameof(ContainingPlaylistID))]
    public Playlist ContainingPlaylist { get; set; }
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

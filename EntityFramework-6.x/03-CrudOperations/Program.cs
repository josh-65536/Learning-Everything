using System.Data.Entity;
using System.Linq;

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
}

class Program
{
    static void Main(string[] args)
    {
        var context = new MyContext();

        // Create
        context.Videos.Add(new Video
        {
            Title = "Entity Framework CRUD Operations",
            Description = "Learn the meaning of CRUD."
        });

        context.SaveChanges();

        // Read/Update
        var video = context.Videos.FirstOrDefault(v => v.ID == 1);
        video.Title = "Beginning CRUD";

        context.SaveChanges();

        // Delete
        video = context.Videos.FirstOrDefault(v => v.ID == 1);

        context.Videos.Remove(video);
        context.SaveChanges();
    }
}
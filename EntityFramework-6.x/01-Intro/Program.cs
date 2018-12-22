using System.Data.Entity;

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
        var video = new Video
        {
            Title = "Hello World Entity Framework",
            Description = "Learn about the Entity Framework."
        };

        var context = new MyContext();
        context.Videos.Add(video);
        context.SaveChanges();
    }
}
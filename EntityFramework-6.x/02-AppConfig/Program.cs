using System;
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
    public DbSet<Video> Videos { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        var context = new MyContext();
        var video = context.Videos.FirstOrDefault(v => v.ID == 1);
        Console.WriteLine(video?.ID);
        Console.WriteLine(video?.Title);
        Console.WriteLine(video?.Description);
        Console.ReadKey();
    }
}
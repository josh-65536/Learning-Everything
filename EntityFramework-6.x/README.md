# Learning Entity Framework

## Short tutorial about migrations (for myself)

To put short: migrations are like version control for databases. No need to set
up dreadful 5-hour presentation on this.

Here's how you use migrations. In the VS2017's Package Manager Console,

1. `Enable-Migrations`
Well, it enables you to use migrations.

2. Add a C# class to your project: `class Apple { [...] }`

3. `Add-Migration AddAppleTable`

4. `Update-Database`

5. Add this `class Bacon { [...] }`

6. `Add-Migration AddBaconTable`

7. `Update-Database`

8. Bacon is unhealthy, and now you regret making that change. Run this command:
`Update-Database -TargetDatabase AddAppleTable`

There you go.
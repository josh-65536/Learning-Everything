USE FirstDb;

SELECT Location,
       COUNT(Location) AS [Number of National Parks]
  FROM NationalParks
 GROUP
    BY Location
 ORDER
    BY [Number of National Parks] DESC;

SELECT Location,
       COUNT(Location) AS [Number of National Parks]
  FROM NationalParks
 GROUP
    BY Location
HAVING COUNT(Location) >= 4
 ORDER
    BY COUNT(Location) DESC;
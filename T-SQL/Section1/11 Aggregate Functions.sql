USE FirstDb;

SELECT COUNT(*)                      AS [Number of States],
       FORMAT(SUM(Population), 'N0') AS [Total Population],
       FORMAT(AVG(Population), 'N0') AS [Average State Population]
  FROM States;

SELECT COUNT(*) AS [Number of National Parks]
  FROM NationalParks;
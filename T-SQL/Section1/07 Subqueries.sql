USE FirstDb;

SELECT Code,
       LargestCity                 AS [Largest City in State],
       (SELECT COUNT(*)
          FROM States)             AS [State Count],
       (SELECT TOP 1 LargestCity
          FROM States
         ORDER
            BY Population DESC)    AS [Largest City in US]
  FROM States;

SELECT Name,
       LandArea,
       WaterArea
  FROM States
 WHERE LandArea + WaterArea > (SELECT SUM(WaterArea)
                                 FROM States);

SELECT SUM(WaterArea)
  FROM States;

SELECT TOP 5
       Name,
       LandArea
  FROM States
 ORDER
    BY LandArea DESC;

SELECT TOP 5
       Name,
       LandArea + WaterArea AS TotalArea
  FROM States
 ORDER
    BY TotalArea DESC;
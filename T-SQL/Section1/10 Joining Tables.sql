USE FirstDb;

SELECT * FROM States;
SELECT * FROM NationalParks;

SELECT s.Name        AS [State],
       s.CapitalCity AS [Capital City],
       s.LargestCity AS [Largest City],
       np.Name       AS [National Park]
  FROM States s
 INNER
  JOIN NationalParks np
    ON s.Name = np.Location;

SELECT s.Name        AS [State],
       s.CapitalCity AS [Capital City],
       s.LargestCity AS [Largest City],
       np.Name       AS [National Park]
  FROM States s
  FULL
  JOIN NationalParks np
    ON s.Name = np.Location;
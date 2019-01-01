USE FirstDb;

SELECT TOP 10 *
  FROM States
 ORDER
    BY Population DESC;

SELECT TOP 5 *
  FROM States
 ORDER
    BY Population ASC;

SELECT TOP 10 PERCENT *
  FROM States
 ORDER
    BY LandArea + WaterArea DESC;
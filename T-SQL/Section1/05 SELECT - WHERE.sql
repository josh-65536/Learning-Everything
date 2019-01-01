USE FirstDb;

SELECT *
  FROM States
 WHERE Code = 'CA'
    OR Code = 'TX'
    OR Code = 'NY';

SELECT *
  FROM States
 WHERE Code IN ('CA', 'TX', 'NY')

SELECT *
  FROM States
 WHERE CapitalCity LIKE '%ville'
    OR LargestCity LIKE '%ville';

SELECT *
  FROM States
 WHERE Population >= 10000000;

SELECT *
  FROM States
 WHERE Population BETWEEN 1000000 AND 2000000;
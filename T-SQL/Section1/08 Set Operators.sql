USE FirstDb;

(SELECT * FROM States)
  UNION
(SELECT * FROM States);

(  SELECT * FROM States)
UNION ALL
(  SELECT * FROM States);

  (SELECT * FROM States)
INTERSECT
  (SELECT * FROM States);

(SELECT * FROM States)
 EXCEPT
(SELECT * FROM States);
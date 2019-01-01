USE FirstDb;

DECLARE mycursor CURSOR
    FOR SELECT Name,
               Location,
               CONVERT(varchar(10), Established),
               CONVERT(varchar(11), Visitors)
          FROM NationalParks;
OPEN mycursor;

DECLARE @name        varchar(80),
        @location    varchar(80),
        @established varchar(10),
        @visitors    varchar(11);

FETCH NEXT
 FROM mycursor
 INTO @name, @location, @established, @visitors;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT CONCAT(@name, '; ', @location, '; ', @established, '; ', @visitors);

    FETCH NEXT
     FROM mycursor
     INTO @name, @location, @established, @visitors;
END;

CLOSE mycursor;
DEALLOCATE mycursor;
USE FirstDb;
GO

CREATE OR ALTER PROCEDURE myprocedure1 AS
BEGIN
    PRINT 'Hello World!';
END;
GO

CREATE OR ALTER PROCEDURE myprocedure2 @name varchar(80) AS
BEGIN
    PRINT CONCAT('Hello, ', @name, '!');
END;
GO

myprocedure1;
EXEC myprocedure1;

EXEC myprocedure2 'John Smith';
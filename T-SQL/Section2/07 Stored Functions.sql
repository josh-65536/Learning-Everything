USE FirstDb;
GO

CREATE OR ALTER FUNCTION myfunction1 (@value int)
    RETURNS int AS
BEGIN
    RETURN @value * 2;
END;
GO

PRINT dbo.myfunction1(200);
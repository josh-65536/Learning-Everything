USE FirstDb;

DECLARE @characterMask TABLE (
    AsciiCode int NOT NULL PRIMARY KEY,
    IsAllowed bit NOT NULL,
    IsLetter  bit NOT NULL,
    IsNumber  bit NOT NULL,
    IsSymbol  bit NOT NULL
);

DECLARE @index int = 0;

WHILE @index < 256
BEGIN
    DECLARE @isAllowed bit = 1;
    DECLARE @isLetter  bit = 0;
    DECLARE @isNumber  bit = 0;
    DECLARE @isSymbol  bit = 0;

    IF @index BETWEEN ASCII('A') AND ASCII('Z')
        SET @isLetter = 1;
    ELSE IF @index BETWEEN ASCII('a') AND ASCII('z')
        SET @isLetter = 1;
    ELSE IF @index BETWEEN ASCII('0') AND ASCII('9')
        SET @isNumber = 1;
    ELSE IF @index = ASCII('_')
        SET @isSymbol = 1;
    ELSE
        SET @isAllowed = 0;

    INSERT INTO @characterMask
         VALUES (@index, @isAllowed, @isLetter, @isNumber, @isSymbol);

    SET @index = @index + 1;
END;

SELECT CHAR(AsciiCode) AS [Value],
       IsAllowed,
       IsLetter,
       IsNumber,
       IsSymbol
  FROM @characterMask
 WHERE IsAllowed = 1;
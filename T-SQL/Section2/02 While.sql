USE FirstDb;

DECLARE @alphabet TABLE (
    Uppercase char(1) NOT NULL PRIMARY KEY,
    Lowercase char(1) NOT NULL
);

DECLARE @index int = 0;

WHILE @index < 26
BEGIN
    INSERT INTO @alphabet
         VALUES (CHAR(@index + ASCII('A')),
                 CHAR(@index + ASCII('a')));

    SET @index = @index + 1;
END;

SELECT * FROM @alphabet;
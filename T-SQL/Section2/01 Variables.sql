USE FirstDb;

DECLARE @foo int = 0;
SELECT @foo;

SET @foo = 3;
SELECT @foo;


DECLARE @tempTable TABLE (
    FirstValue  int         NOT NULL PRIMARY KEY,
    SecondValue varchar(20) NOT NULL
);

INSERT INTO @tempTable
     VALUES (1, 'The'),
            (2, 'quick'),
            (3, 'brown'),
            (4, 'fox');

SELECT * FROM @tempTable;
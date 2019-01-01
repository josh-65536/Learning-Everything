USE FirstDb;

CREATE TABLE States (
    Code        char(2)      NOT NULL PRIMARY KEY,
    Name        nvarchar(80) NOT NULL,
    CapitalCity nvarchar(80),
    LargestCity nvarchar(80),
    Established date,
    Population  int,
    LandArea    int,
    WaterArea   int,
);
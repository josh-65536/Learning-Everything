USE FirstDb;

CREATE TABLE Customers (
    ID           int                                                                   NOT NULL,
    FirstName    varchar(80)                                                           NOT NULL,
    LastName     varchar(80)                                                           NOT NULL,
    EmailAddress varchar(80)                                                           NOT NULL,
    Age          int         CONSTRAINT is_adult     CHECK (Age >= 18)                 NOT NULL,
    Gender       char(1)     CONSTRAINT valid_gender CHECK (Gender IN ('M', 'F', 'O')) NOT NULL,
    CONSTRAINT customerid_pk PRIMARY KEY (ID),
    CONSTRAINT email_unique  UNIQUE (EmailAddress)
);

EXEC sp_columns Customers;

INSERT INTO Customers VALUES (1, 'John', 'Smith', 'john@smith.com', 18, 'M');
-- INSERT INTO Customers VALUES (1, 'John', 'Smith', 'john@smith.com', 17, 'M');

DROP TABLE Customers;
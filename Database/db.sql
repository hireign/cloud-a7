CREATE DATABASE `assign6`; 

USE `assign6`;

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `emailid` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

LOCK TABLES `auth` WRITE;
INSERT INTO `auth` (`id`, `name`, `emailid`, `password`) VALUES (1,'admin','admin@admin.com','admin123');
UNLOCK TABLES;

CREATE TABLE `jobparts` (
  `userid` varchar(20) NOT NULL,
  `partId` int(11) NOT NULL,
  `jobName` varchar(20) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `result` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`userid`,`jobName`,`partId`)
);

LOCK TABLES `jobparts` WRITE;
UNLOCK TABLES;

CREATE TABLE `jobs` (
  `jobName` varchar(20) NOT NULL,
  `partId` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`jobName`,`partId`)
);

LOCK TABLES `jobs` WRITE;
INSERT INTO `jobs` (`jobName`, `partId`, `qty`) VALUES ('job017',17,1000),('job117',117,20),('job217',217,50),('job217',317,50),('job317',317,50);
UNLOCK TABLES;

CREATE TABLE `PartOrdersX` (
  `partId` int(11) NOT NULL,
  `jobName` varchar(20) NOT NULL,
  `userId` varchar(20) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`partId`,`jobName`,`userId`)
);

LOCK TABLES `PartOrdersX` WRITE;
UNLOCK TABLES;

CREATE TABLE `PartOrdersY` (
  `partId` int(11) NOT NULL,
  `jobName` varchar(20) NOT NULL,
  `userId` varchar(20) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`partId`,`jobName`,`userId`)
); 

LOCK TABLES `PartOrdersY` WRITE;
UNLOCK TABLES;

CREATE TABLE `parts` (
  `partId` int(11) NOT NULL,
  `partName` varchar(20) DEFAULT NULL,
  `qoh` int(11) DEFAULT NULL,
  PRIMARY KEY (`partId`)
);

LOCK TABLES `parts` WRITE;
INSERT INTO `parts` (`partId`, `partName`, `qoh`) VALUES (17,'part017',200),(117,'part117',100),(217,'part217',150),(317,'part317',50);
UNLOCK TABLES;

CREATE TABLE `search` (
  `jobName` varchar(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL
);

LOCK TABLES `search` WRITE;
UNLOCK TABLES;

SELECT * FROM jobs;
SELECT * FROM parts;
SELECT * FROM PartOrdersX;
SELECT * FROM PartOrdersY;
SELECT * FROM auth;
SELECT * FROM search;
SELECT * FROM jobparts;
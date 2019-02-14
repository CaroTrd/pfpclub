CREATE TABLE `members` (
	`member_id` int NOT NULL AUTO_INCREMENT,
	`first_name` varchar(150) NOT NULL,
	`last_name` varchar(150) NOT NULL,
	`birthdate` DATE NOT NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`phone` varchar(15) NOT NULL,
	`address` varchar(150) NOT NULL,
	`city` varchar(50) NOT NULL,
	`municipality` varchar(90) NOT NULL,
	`zip_code` varchar(16) NOT NULL,
	`country` varchar(50) NOT NULL,
	`affiliation_date` DATETIME NOT NULL DEFAULT NOW(),
	`affiliation_end_date` DATE,
	`member_status` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
	PRIMARY KEY (`member_id`)
);


CREATE TABLE `companies` (
	`company_id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`manager` varchar(150) NOT NULL,
	`vat_numbr` varchar(100) NOT NULL UNIQUE,
	`email` varchar(100) NOT NULL UNIQUE,
	`phone` varchar(15) NOT NULL,
	`address` varchar(150) NOT NULL,
	`city` varchar(150) NOT NULL,
	`municipality` varchar(90) NOT NULL,
	`zip_code` varchar(16) NOT NULL,
	`country` varchar(50) NOT NULL,
	`website` varchar(100) NOT NULL UNIQUE,
	description text,
	`logo` varchar(200) NOT NULL,
	`company_status` tinyint(1) NOT NULL DEFAULT '0',
	PRIMARY KEY (`company_id`)
);

CREATE TABLE `partners_types` (
	`partnership_type_id` int NOT NULL AUTO_INCREMENT,
	`type` varchar(10) NOT NULL,
	PRIMARY KEY (`partnership_type_id`)
);

CREATE TABLE `partners` (
	`partner_id` int NOT NULL AUTO_INCREMENT,
	`partner_status` tinyint(1) NOT NULL DEFAULT '0',
	`affiliation_date` DATE NOT NULL,
	`affiliation_end_date` DATE NOT NULL,
	`company_id` int NOT NULL,
	`partnership_type_id` int(10) NOT NULL,
	`offer` text,
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`),
	FOREIGN KEY (`partnership_type_id`) REFERENCES `partners_types`(`partnership_type_id`),
	PRIMARY KEY (`partner_id`)
);

CREATE TABLE `hobbies` (
	`hobby_id` int NOT NULL AUTO_INCREMENT,
	`hobby_name` varchar(200) NOT NULL,
	PRIMARY KEY (`hobby_id`)
);


CREATE TABLE `members_hobbies` (
	`member_id` int NOT NULL,
	`hobby_id` int NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`member_id`),
	FOREIGN KEY (`hobby_id`) REFERENCES `hobbies`(`hobby_id`),
	PRIMARY KEY (`member_id`,`hobby_id`)
);


CREATE TABLE `ambassadors` (
	`ambassador_id` int NOT NULL AUTO_INCREMENT,
	`hobby_id` int NOT NULL,
	`member_id` int NOT NULL,
	`ambassador_status` tinyint(1) NOT NULL DEFAULT '0',
	FOREIGN KEY (`hobby_id`) REFERENCES `hobbies`(`hobby_id`),
	FOREIGN KEY (`member_id`) REFERENCES `members`(`member_id`),
	PRIMARY KEY (`ambassador_id`)
);


CREATE TABLE `members_companies` (
	`member_id` int NOT NULL,
	`company_id` int NOT NULL,
	`member_position` varchar(50) NOT NULL,
	`position_status` tinyint(1) NOT NULL,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`member_id`),
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`),
	PRIMARY KEY (`member_id`,`company_id`)
);

CREATE TABLE `categories` (
	`category_id` int NOT NULL AUTO_INCREMENT,
	`category_name` varchar(50) NOT NULL,
	PRIMARY KEY (`category_id`)
);

CREATE TABLE `companies_categories` (
	`companies_categories_id` int NOT NULL AUTO_INCREMENT,
	`category_id` int NOT NULL,
	`company_id` int NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`),
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`company_id`),
	PRIMARY KEY (`companies_categories_id`)
);

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `article` text NOT NULL,
  `media` varchar(512) NOT NULL
);

use pfpclub;


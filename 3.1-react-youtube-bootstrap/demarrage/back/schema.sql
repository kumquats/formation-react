CREATE USER 'react_youtube'@'localhost' IDENTIFIED BY 'react_youtube';
GRANT USAGE ON *.* TO 'react_youtube'@'localhost' IDENTIFIED BY 'react_youtube' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
CREATE DATABASE IF NOT EXISTS `react_youtube`;
GRANT ALL PRIVILEGES ON `react\_youtube`.* TO 'react_youtube'@'localhost';

ALTER DATABASE `react_youtube` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;

USE `react_youtube`;

CREATE TABLE `react_youtube`.`video` ( `id` INT NOT NULL AUTO_INCREMENT , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `title` VARCHAR(255) NOT NULL , `description` TEXT NOT NULL , `file` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `video` CHANGE `title` `title` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL, CHANGE `description` `description` TEXT CHARACTER SET utf8 COLLATE utf8_bin NOT NULL, CHANGE `file` `file` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL;
ALTER TABLE `video` ADD `likes` INT NULL AFTER `file`, ADD `dislikes` INT NULL AFTER `likes`;

INSERT INTO `video` (`id`, `created_at`, `title`, `description`, `file`, `likes`, `dislikes`) VALUES
(1, '2016-12-01 09:56:15', 'Vidéo 1', 'Succulents beard stumptown brunch deep v biodiesel street art, pour-over banjo. Fixie keffiyeh chia, banjo whatever snackwave skateboard poke man bun man braid hammock pickled.', 'video1.mp4', 0, 1),
(2, '2016-12-08 14:09:35', 'Vidéo 2', 'Mlkshk copper mug humblebrag hashtag, messenger bag 3 wolf moon woke. Helvetica skateboard blog, flexitarian street art cornhole truffaut listicle blue bottle 90''s yuccie mustache.', 'video2.mp4', 0, 1),
(3, '2016-12-17 21:17:59', 'Vidéo 3', 'Sartorial semiotics vinyl, vaporware polaroid post-ironic small batch typewriter jean shorts tousled freegan schlitz art party actually cornhole. ', 'video1.mp4', NULL, NULL),
(4, '2016-12-18 08:53:35', 'Vidéo 4', '90''s typewriter lo-fi slow-carb farm-to-table, tofu forage pabst salvia affogato artisan vice humblebrag four loko everyday carry.', 'video2.mp4', NULL, NULL);


CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE `comment` ADD KEY `IDX_VIDEO` (`video_id`);

ALTER TABLE `comment` ADD FOREIGN KEY (`video_id`) REFERENCES `react_youtube`.`video`(`id`);

INSERT INTO `comment` (`id`, `video_id`, `created_at`, `content`) VALUES
(1, 1, '2016-12-16 14:38:30', 'Superbe ! Ce tp est fantastique.'),
(2, 1, '2016-12-16 14:38:34', 'LOL !'),
(3, 2, '2016-12-17 19:18:03', 'React FTW !'),
(4, 3, '2016-12-17 19:19:49', 'J''arrive pas à voir la vidéo. Je suis sur IE6.'),
(5, 4, '2016-12-17 19:20:06', 'Incroyable, j''aurais jamais pensé que ça marcherait...');
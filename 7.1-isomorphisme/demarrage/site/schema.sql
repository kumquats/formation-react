CREATE USER 'react_youtube'@'localhost' IDENTIFIED BY 'react_youtube';
GRANT USAGE ON *.* TO 'react_youtube'@'localhost' IDENTIFIED BY 'react_youtube' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
CREATE DATABASE IF NOT EXISTS `react_youtube`;
GRANT ALL PRIVILEGES ON `react\_youtube`.* TO 'react_youtube'@'localhost';

ALTER DATABASE `react_youtube` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;

USE `react_youtube`;

CREATE TABLE `react_youtube`.`video` ( `id` INT NOT NULL AUTO_INCREMENT , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `title` VARCHAR(255) NOT NULL , `description` TEXT NOT NULL , `file` VARCHAR(255) NOT NULL , `thumbnail` VARCHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;

ALTER TABLE `video` CHANGE `title` `title` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL, CHANGE `description` `description` TEXT CHARACTER SET utf8 COLLATE utf8_bin NOT NULL, CHANGE `file` `file` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL, CHANGE `thumbnail` `thumbnail` VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL;
ALTER TABLE `video` ADD `likes` INT NULL AFTER `thumbnail`, ADD `dislikes` INT NULL AFTER `likes`;

INSERT INTO `video` (`id`, `created_at`, `title`, `description`, `file`, `thumbnail`, `likes`, `dislikes`) VALUES
(1, '2018-08-30 13:40:31', 'Le Top 10 des framework JS', "Vous n'en croirez pas vos yeux", 'video1.mp4', 'video1.jpg', NULL, NULL),
(2, '2018-07-21 08:08:30', '5 bonnes raisons de ne pas fuir cette formation', 'Vous allez halluciner ! Cliquez vite !', 'video2.mp4', 'video2.jpg', NULL, NULL),
(3, '2018-05-21 09:59:14', 'Les plus grands secrets des développeurs React', 'Cliquez et découvrez avant les autres ces astuces incroyables !', 'video3.mp4', 'video3.jpg', NULL, NULL),
(4, '2018-04-21 14:19:15', 'Votre DSI ne veut pas que vous voyiez cette vidéo !', 'Les experts sont formels : cette méthode de développement mystérieuse va changer votre vie.', 'video1.mp4', 'video4.jpg', NULL, NULL),
(5, '2018-03-21 15:27:33', 'Les gens vous supplieront de développer leur appli !', 'Visionnez cette vidéo au plus vite et apprenez les 1022 méthodes de développement les plus rentables.', 'video2.mp4', 'video5.jpg', NULL, NULL),
(6, '2018-02-21 15:32:50', 'Les 12 techniques imparables pour rater un café', 'Vous en avez marre de tout réussir ? Ratez aux moins les cafés grâce à cette vidéo inédite !', 'video3.mp4', 'video6.jpg', NULL, NULL);


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
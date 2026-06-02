-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 28 mai 2026 à 15:29
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id_categorie` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `slug` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom`, `slug`) VALUES
(1, 'Bâtiment', 'batiment'),
(2, 'Service', 'service'),
(3, 'Fabrication', 'fabrication'),
(4, 'Alimentation', 'alimentation');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(11) NOT NULL,
  `nom_expediteur` varchar(100) NOT NULL,
  `prenom_expediteur` varchar(100) NOT NULL,
  `email_expediteur` varchar(100) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `objet` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `id_entreprise` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `contact`
--

INSERT INTO `contact` (`id_contact`, `nom_expediteur`, `prenom_expediteur`, `email_expediteur`, `code_postal`, `objet`, `message`, `date`, `id_entreprise`) VALUES
(1, 'Doe', 'Jane', 'janedoe@gmail.com', '35000', 'Demande de devis', 'Bonjour, Pouvez-vous m\'établir un devis pour l\'installation d\'une climatisation ? Merci.', '2026-05-21 18:24:26', 5),
(2, 'Doe', 'Jane', 'test@test.fr', 'TEST', '', 'test', '2026-05-27 19:42:46', 17),
(3, 'Doe', 'Jane', 'janedoe@gmail.com', '55555', '', 'test message de succès', '2026-05-28 08:49:16', 2);

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

CREATE TABLE `entreprise` (
  `id_entreprise` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  `note` decimal(2,1) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `web` varchar(255) DEFAULT NULL,
  `top_entreprise` tinyint(1) NOT NULL,
  `seo_title` varchar(255) NOT NULL,
  `seo_description` varchar(255) NOT NULL,
  `id_specialite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id_entreprise`, `nom`, `image`, `note`, `ville`, `description`, `email`, `web`, `top_entreprise`, `seo_title`, `seo_description`, `id_specialite`) VALUES
(1, 'Boucherie Dumont', 'artisan.jpg', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', NULL, 0, 'Boucher à Lyon | Boucherie Dumont', 'Boucherie artisanale au coeur de Lyon. Viande de qualité et spécialités régionales.', 12),
(2, 'Au pain chaud', 'artisan.jpg', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', NULL, 1, 'Boulangerie à Montélimar | Au pain chaud', 'Boulangerie familiale et artisanale à Montélimard.', 13),
(3, 'Chocolaterie Labbé', 'artisan.jpg', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 'Chocolatier à Lyon | Chocolaterie Labbée', 'Maître chocolatier de père en fils depuis 1934.', 14),
(4, 'Traiteur Truchon', 'artisan.jpg', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 'Traiteur à Lyon | Traiteur Truchon', 'Traiteur pour tous vos évènements.', 15),
(5, 'Orville Salmons', 'artisan.jpg', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', NULL, 1, 'Chauffagiste à Evian | Orville Salmons', 'Dépannage et installation. Devis gratuit.', 1),
(6, 'Mont Blanc Eléctricité', 'artisan.jpg', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 'Electricien à Chamonix | Mont Blanc Eléctricité', 'Urgences, dépannage et rénovation. Devis gratuit.', 2),
(7, 'Boutot & fils', 'artisan.jpg', 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 'Menusier à Bourg-en-Bresse | Boutot & fils', 'Fabricant de fenêtre, porte et véranda sur mesure.', 3),
(8, 'Vallis Bellemare', 'artisan.jpg', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 'Plombier à Montélimar | Vallis Bellemare', 'Urgences, dépannage et rénovation. Devis gratuit.', 4),
(9, 'Claude Quinn', 'artisan.jpg', 4.2, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', NULL, 0, 'Bijoutier à Aix-les-Bains | Claude Quinn', 'Bijoutier haut de gamme. Bijoux de créateurs sur mesure.', 9),
(10, 'Amitée Lécuyer', 'artisan.jpg', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 'Couturier à Annecy | Amitée Lécuyer', 'Couture et retourche de tous vos vêtements sur mesure. ', 10),
(11, 'Ernest Carigan', 'artisan.jpg', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', NULL, 0, 'Ferronier à Le Puy-en-Velay | Ernest Carigan', 'Conception, réalisation et agencement haut-de-gamme : escalier, garde-corps, portail, luminaire.', 11),
(12, 'Royden Charbonneau', 'artisan.jpg', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', NULL, 0, 'Coiffeur à Saint-Priest | Royden Charbonneau', 'Coiffure mixte adulte et enfant. Avec ou sans rendez-vous.', 5),
(13, 'Leala Dennis', 'artisan.jpg', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, 'Coiffeur à Chambéry | Leala Dennis', 'Coiffeur visagiste expert en transformation. Sur rendez-vous.', 5),
(14, 'C\'est sup\'hair', 'artisan.jpg', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 'Coiffeur à Romans-sur-Isère | C\'est sup\'hair', 'Coiffeur et styliste spécialisé pour vos mariages.', 5),
(15, 'Le monde des fleurs', 'artisan.jpg', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 'Fleuriste à Annonay | Le monde des fleurs', 'Collections de compositions florales et bouquets selon les saisons. ', 6),
(16, 'Valérie Laderoute', 'artisan.jpg', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', NULL, 0, 'Toiletteur à Valence | Valérie Laderoute', 'Service de toilettage complet pour vos animaux de compagnie.', 7),
(17, 'CM Graphisme', 'artisan.jpg', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 'Webdesigner à Valence | CM Graphisme', 'Conception de site sur-mesure pour tous vos projets.', 8);

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

CREATE TABLE `specialite` (
  `id_specialite` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `id_categorie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`id_specialite`, `nom`, `id_categorie`) VALUES
(1, 'Chauffagiste', 1),
(2, 'Electricien', 1),
(3, 'Menuisier', 1),
(4, 'Plombier', 1),
(5, 'Coiffeur', 2),
(6, 'Fleuriste', 2),
(7, 'Toiletteur', 2),
(8, 'Webdesign', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Boucher', 4),
(13, 'Boulanger', 4),
(14, 'Chocolatier', 4),
(15, 'Traiteur', 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`),
  ADD KEY `fk_contact_entreprise` (`id_entreprise`);

--
-- Index pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD PRIMARY KEY (`id_entreprise`),
  ADD KEY `fk_specialite` (`id_specialite`);

--
-- Index pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD PRIMARY KEY (`id_specialite`),
  ADD KEY `fk_categorie` (`id_categorie`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `entreprise`
--
ALTER TABLE `entreprise`
  MODIFY `id_entreprise` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `specialite`
--
ALTER TABLE `specialite`
  MODIFY `id_specialite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `fk_contact_entreprise` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprise` (`id_entreprise`);

--
-- Contraintes pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD CONSTRAINT `fk_specialite` FOREIGN KEY (`id_specialite`) REFERENCES `specialite` (`id_specialite`);

--
-- Contraintes pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD CONSTRAINT `fk_categorie` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

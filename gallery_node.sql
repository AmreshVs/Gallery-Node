-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2021 at 03:50 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gallery_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `imageName` varchar(200) NOT NULL,
  `url` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `createdBy`, `imageName`, `url`, `createdAt`, `updatedAt`) VALUES
(34, 8, '4W9A1357.JPG', '4W9A1357.JPG', '2021-06-18 01:27:49', '2021-06-18 01:27:49'),
(35, 8, '4W9A1467.JPG', '4W9A1467.JPG', '2021-06-18 01:27:54', '2021-06-18 01:27:54'),
(36, 8, '4W9A1598 (1).JPG', '4W9A1598 (1).JPG', '2021-06-18 01:28:00', '2021-06-18 01:28:00'),
(37, 9, 'WhatsApp Image 2019-09-12 at 17.21.56.jpeg', 'WhatsApp Image 2019-09-12 at 17.21.56.jpeg', '2021-06-18 01:28:32', '2021-06-18 01:28:32'),
(38, 9, 'WhatsApp Image 2019-09-12 at 17.21.16.jpeg', 'WhatsApp Image 2019-09-12 at 17.21.16.jpeg', '2021-06-18 01:28:37', '2021-06-18 01:28:37'),
(39, 9, 'WhatsApp Image 2019-09-12 at 17.20.22 (3).jpeg', 'WhatsApp Image 2019-09-12 at 17.20.22 (3).jpeg', '2021-06-18 01:28:44', '2021-06-18 01:28:44'),
(40, 9, 'WhatsApp Image 2019-09-12 at 17.21.15 (2).jpeg', 'WhatsApp Image 2019-09-12 at 17.21.15 (2).jpeg', '2021-06-18 01:28:49', '2021-06-18 01:28:49'),
(41, 9, 'WhatsApp Image 2019-09-12 at 17.20.22 (4).jpeg', 'WhatsApp Image 2019-09-12 at 17.20.22 (4).jpeg', '2021-06-18 01:28:55', '2021-06-18 01:28:55'),
(42, 9, '_17A9804.JPG', '_17A9804.JPG', '2021-06-18 01:29:01', '2021-06-18 01:29:01'),
(43, 8, '30265300_1023756971111392_1866341020358349462_n.jpg', '30265300_1023756971111392_1866341020358349462_n.jpg', '2021-06-18 01:42:44', '2021-06-18 01:42:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(8, 'Amresh Vs', 'amreshcse007@gmail.com', '$2b$10$oz.crSvQswBvg3VvyYnf4u8USbKtWDBxhG.40HSXGgHkSCLqHxLPi', '2021-06-18', '2021-06-18'),
(9, 'Amresh Pro', 'vsamreshpro@gmail.com', '$2b$10$F4uQgOPdhNr7VpKKBMz/bOEP4/dRG2zo9nuEzXVJ89px5jhmdY04y', '2021-06-18', '2021-06-18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2025 at 05:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-app`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `user_id`, `name`, `company`, `position`, `email`, `phone`, `mobile`, `address`, `company_address`, `logo`, `is_active`, `created_at`, `updated_at`) VALUES
(4, 1, 'new', 'ssssss', 'sssssss', 'weamfouda200@gmail.com', '01097367576', '2222222222222', 'test', 'ggggg', '1738763382.png', 1, '2025-02-05 11:49:42', '2025-02-05 11:49:42'),
(5, 1, 'testttr', 'ssssss', 'sssssss', 'weamfouda200@gmail.com', '01097367576', '2222222222222', 'test', 'ggggg', '1738764508.png', 0, '2025-02-05 12:08:28', '2025-02-05 13:32:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

CREATE TABLE `logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `action` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `mac_address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `user_id`, `action`, `ip_address`, `mac_address`, `created_at`, `updated_at`) VALUES
(1, 1, 'User Registered', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 20:22:36', '2025-02-04 20:22:36'),
(2, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 20:22:38', '2025-02-04 20:22:38'),
(3, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 20:24:51', '2025-02-04 20:24:51'),
(4, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 21:54:29', '2025-02-04 21:54:29'),
(5, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 22:17:43', '2025-02-04 22:17:43'),
(6, 2, 'User Registered', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 22:19:33', '2025-02-04 22:19:33'),
(7, 2, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 22:19:34', '2025-02-04 22:19:34'),
(8, 2, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 22:20:14', '2025-02-04 22:20:14'),
(9, 2, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-04 22:23:07', '2025-02-04 22:23:07'),
(10, 2, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-05 01:37:08', '2025-02-05 01:37:08'),
(11, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-05 01:37:19', '2025-02-05 01:37:19'),
(12, 1, 'User Login', '127.0.0.1', 'C8-3D-D4-70-2B-BE   Media disconnected', '2025-02-05 01:41:28', '2025-02-05 01:41:28');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_02_02_192125_create_cards_table', 1),
(6, '2025_02_02_192236_create_logs_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', 'fe005117b32f014cfcfa6624b2b534c9c5732fe1f39fa3ec2c6d2a85ec88a2da', '[\"*\"]', NULL, NULL, '2025-02-04 20:22:36', '2025-02-04 20:22:36'),
(2, 'App\\Models\\User', 1, 'auth_token', '5e7e5880f3b14c1d727357225de76659b08c0ce70394f1e44ce22591d1c4cf86', '[\"*\"]', '2025-02-04 20:22:43', NULL, '2025-02-04 20:22:37', '2025-02-04 20:22:43'),
(3, 'App\\Models\\User', 1, 'auth_token', '2ecacbfc0cef379ee57c1a4edc13964d8016b87d0d4b9547836cbcbca4dfd201', '[\"*\"]', NULL, NULL, '2025-02-04 20:24:51', '2025-02-04 20:24:51'),
(4, 'App\\Models\\User', 1, 'auth_token', 'afcaa54f259370190f5c52e67f235088d04195e591818974ab74d1c7738244f9', '[\"*\"]', '2025-02-04 21:57:28', NULL, '2025-02-04 21:54:29', '2025-02-04 21:57:28'),
(5, 'App\\Models\\User', 1, 'auth_token', 'a4790bcfd0c088721fe442749f8ca104b019b3e0544c43083103d06d1470ad09', '[\"*\"]', '2025-02-05 01:34:26', NULL, '2025-02-04 22:17:42', '2025-02-05 01:34:26'),
(6, 'App\\Models\\User', 2, 'auth_token', 'ac8f30f8eea167251e3a09b1806383362ab83b0ed4ee74001b551cf69faa911e', '[\"*\"]', NULL, NULL, '2025-02-04 22:19:33', '2025-02-04 22:19:33'),
(7, 'App\\Models\\User', 2, 'auth_token', '1cd21820b213bc5f3bc45e3dfd5c8eeb3ee7c39d6977361b885c476cdc292595', '[\"*\"]', NULL, NULL, '2025-02-04 22:19:34', '2025-02-04 22:19:34'),
(8, 'App\\Models\\User', 2, 'auth_token', '938b036adf644fc6b1242c2b752e0c4dca83133396482475930200d6767f0ae0', '[\"*\"]', '2025-02-04 22:23:08', NULL, '2025-02-04 22:20:14', '2025-02-04 22:23:08'),
(9, 'App\\Models\\User', 2, 'auth_token', '3f78e597906b18a610932fabdffcee0ef4b27a957bb01e9d9b64a7626fc723ef', '[\"*\"]', '2025-02-05 13:52:40', NULL, '2025-02-04 22:23:06', '2025-02-05 13:52:40'),
(10, 'App\\Models\\User', 2, 'auth_token', '1cc3cdb9e54d8f593cd078fb9819c629c36fab728f3ae53d2180d39f7d4e9c7f', '[\"*\"]', '2025-02-05 01:37:09', NULL, '2025-02-05 01:37:08', '2025-02-05 01:37:09'),
(11, 'App\\Models\\User', 1, 'auth_token', '36a5e651ba36cf9e388362e089b57f2c071f7ad69b28ddf4736101f54bfd06d7', '[\"*\"]', '2025-02-05 01:40:10', NULL, '2025-02-05 01:37:19', '2025-02-05 01:40:10'),
(12, 'App\\Models\\User', 1, 'auth_token', '57101a97d2197bc5342c36d8b6024ed5c3d9aae0f0b94195ced98ecd50a8912d', '[\"*\"]', '2025-02-05 13:42:20', NULL, '2025-02-05 01:41:27', '2025-02-05 13:42:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'test user', 'weamfouda200@gmail.com', '$2y$12$Qja84fHHm9vip5HzKANU5.VkLgu0w7g7n/4BHLetKENpXF2/pYT8.', 'user', 1, '2025-02-04 20:22:36', '2025-02-05 13:36:01'),
(2, 'admin', 'weamfouda@gmail.com', '$2y$12$qSZFZAAd.PfTX8u9OXt/1e.C1JbE6Sz/sKLzW0a15WehyIf6SVXA6', 'admin', 1, '2025-02-04 22:19:33', '2025-02-04 22:19:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cards_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `logs`
--
ALTER TABLE `logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `logs_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `logs`
--
ALTER TABLE `logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `logs`
--
ALTER TABLE `logs`
  ADD CONSTRAINT `logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

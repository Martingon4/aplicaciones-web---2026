-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2026 a las 00:21:51
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formularios_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_personales`
--

CREATE TABLE `datos_personales` (
  `id_datos` int(11) NOT NULL,
  `id_registro` int(11) NOT NULL,
  `hora_nacimiento` time DEFAULT NULL,
  `dia_nacimiento` tinyint(3) UNSIGNED DEFAULT NULL,
  `mes_nacimiento` tinyint(3) UNSIGNED DEFAULT NULL,
  `anio_nacimiento` smallint(5) UNSIGNED DEFAULT NULL,
  `tengo_pareja` tinyint(1) NOT NULL DEFAULT 0,
  `hora_nac_pareja` time DEFAULT NULL,
  `dia_nac_pareja` tinyint(3) UNSIGNED DEFAULT NULL,
  `mes_nac_pareja` tinyint(3) UNSIGNED DEFAULT NULL,
  `anio_nac_pareja` smallint(5) UNSIGNED DEFAULT NULL,
  `enfermedades_anio` text DEFAULT NULL,
  `enfermedades_pareja` text DEFAULT NULL,
  `situacion_financiera` enum('Buena','Regular','Mala') DEFAULT NULL,
  `situacion_laboral` enum('Desempleado','Empleado','Empresario') DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ;

--
-- Volcado de datos para la tabla `datos_personales`
--

INSERT INTO `datos_personales` (`id_datos`, `id_registro`, `hora_nacimiento`, `dia_nacimiento`, `mes_nacimiento`, `anio_nacimiento`, `tengo_pareja`, `hora_nac_pareja`, `dia_nac_pareja`, `mes_nac_pareja`, `anio_nac_pareja`, `enfermedades_anio`, `enfermedades_pareja`, `situacion_financiera`, `situacion_laboral`, `creado_en`) VALUES
(1, 1, '07:15:00', 12, 5, 2007, 0, NULL, NULL, NULL, NULL, 'Ninguna', NULL, 'Regular', '', '2026-02-17 17:54:37'),
(2, 2, '10:40:00', 3, 11, 2006, 1, '09:05:00', 22, 8, 2006, 'Gripe estacional', 'Ninguna', 'Buena', 'Empleado', '2026-02-17 17:54:37'),
(3, 3, '06:05:00', 25, 1, 2007, 0, NULL, NULL, NULL, NULL, 'Ninguna', NULL, 'Regular', 'Desempleado', '2026-02-17 17:54:37'),
(4, 4, '14:20:00', 9, 3, 2006, 1, '16:30:00', 10, 10, 2006, 'Alergia', 'Gripe', 'Buena', 'Empleado', '2026-02-17 17:54:37'),
(5, 5, '08:55:00', 18, 7, 2007, 0, NULL, NULL, NULL, NULL, 'Ninguna', NULL, 'Mala', 'Desempleado', '2026-02-17 17:54:37'),
(6, 6, '12:10:00', 1, 12, 2006, 1, '11:45:00', 2, 2, 2006, 'Ninguna', 'Ninguna', 'Regular', 'Empresario', '2026-02-17 17:54:37'),
(7, 7, '05:35:00', 30, 9, 2007, 0, NULL, NULL, NULL, NULL, 'Resfriado', NULL, 'Regular', 'Empleado', '2026-02-17 17:54:37'),
(8, 8, '19:05:00', 7, 4, 2006, 1, '20:00:00', 6, 6, 2006, 'Ninguna', 'Alergia', 'Buena', 'Empleado', '2026-02-17 17:54:37'),
(9, 9, '09:00:00', 21, 2, 2007, 0, NULL, NULL, NULL, NULL, 'Ninguna', NULL, 'Regular', 'Desempleado', '2026-02-17 17:54:37'),
(10, 10, '16:45:00', 11, 10, 2006, 1, '15:15:00', 12, 12, 2006, 'Migraña ocasional', 'Ninguna', 'Buena', 'Empresario', '2026-02-17 17:54:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `id_registro` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `apellido_paterno` varchar(80) NOT NULL,
  `apellido_materno` varchar(80) NOT NULL,
  `nick` varchar(40) NOT NULL,
  `correo` varchar(120) NOT NULL,
  `contrasena_hash` varchar(255) NOT NULL,
  `genero` enum('Masculino','Femenino','Otro') NOT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`id_registro`, `nombre`, `apellido_paterno`, `apellido_materno`, `nick`, `correo`, `contrasena_hash`, `genero`, `creado_en`) VALUES
(1, 'Hugo', 'César', 'Martínez', 'hugocm', 'hugo.cm@example.com', '$2y$10$demo_hash_01', 'Masculino', '2026-02-17 17:54:37'),
(2, 'Ana', 'López', 'García', 'annalu', 'ana.lopez@example.com', '$2y$10$demo_hash_02', 'Femenino', '2026-02-17 17:54:37'),
(3, 'Juan', 'Pérez', 'Santos', 'juanps', 'juan.perez@example.com', '$2y$10$demo_hash_03', 'Masculino', '2026-02-17 17:54:37'),
(4, 'María', 'Hernández', 'Ruiz', 'mhrz', 'maria.h@example.com', '$2y$10$demo_hash_04', 'Femenino', '2026-02-17 17:54:37'),
(5, 'Luis', 'Gómez', 'Cruz', 'luisgc', 'luis.gomez@example.com', '$2y$10$demo_hash_05', 'Masculino', '2026-02-17 17:54:37'),
(6, 'Sofía', 'Torres', 'Vega', 'sofitv', 'sofia.t@example.com', '$2y$10$demo_hash_06', 'Femenino', '2026-02-17 17:54:37'),
(7, 'Diego', 'Ramírez', 'Flores', 'dierf', 'diego.r@example.com', '$2y$10$demo_hash_07', 'Masculino', '2026-02-17 17:54:37'),
(8, 'Valeria', 'Castro', 'Nava', 'valcn', 'valeria.c@example.com', '$2y$10$demo_hash_08', 'Femenino', '2026-02-17 17:54:37'),
(9, 'Alex', 'Morales', 'Quintero', 'alexmq', 'alex.m@example.com', '$2y$10$demo_hash_09', 'Otro', '2026-02-17 17:54:37'),
(10, 'Fernanda', 'Ortega', 'Salas', 'feros', 'fernanda.o@example.com', '$2y$10$demo_hash_10', 'Femenino', '2026-02-17 17:54:37');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  ADD PRIMARY KEY (`id_datos`),
  ADD KEY `fk_dp_registro` (`id_registro`);

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`id_registro`),
  ADD UNIQUE KEY `uq_registro_nick` (`nick`),
  ADD UNIQUE KEY `uq_registro_correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  MODIFY `id_datos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `id_registro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `datos_personales`
--
ALTER TABLE `datos_personales`
  ADD CONSTRAINT `fk_dp_registro` FOREIGN KEY (`id_registro`) REFERENCES `registro` (`id_registro`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

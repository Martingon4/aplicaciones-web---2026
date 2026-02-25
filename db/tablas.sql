-- =========================================================
-- SCRIPT COMPLETO (phpMyAdmin / MariaDB-MySQL)
-- Base de datos + tablas para ambos formularios
-- Incluye TODOS los campos (incluyendo datos de la pareja)
-- =========================================================

CREATE DATABASE IF NOT EXISTS practica7
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_spanish_ci;

USE practica7;

-- (Opcional) Si quieres recrearlas desde cero sin conflictos:
-- DROP TABLE IF EXISTS datos_personales;
-- DROP TABLE IF EXISTS usuarios;

-- =========================================================
-- 1) TABLA: usuarios (formulario de registro)
-- =========================================================
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100) NOT NULL,

    nick VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(150) NOT NULL,

    -- Guarda aquí el HASH de la contraseña (NO texto plano)
    contrasena_hash VARCHAR(255) NOT NULL,

    genero ENUM('Masculino', 'Femenino', 'Otro') NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    UNIQUE KEY uq_usuarios_nick (nick),
    UNIQUE KEY uq_usuarios_correo (correo_electronico)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_spanish_ci;

-- =========================================================
-- 2) TABLA: datos_personales (segundo formulario)
-- Relación 1:1 con usuarios
-- =========================================================
CREATE TABLE IF NOT EXISTS datos_personales (
    id_datos INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT UNSIGNED NOT NULL,

    -- Datos de nacimiento del usuario
    hora_nacimiento TIME NULL,
    dia_nacimiento TINYINT UNSIGNED NULL,
    mes_nacimiento TINYINT UNSIGNED NULL,
    anio_nacimiento SMALLINT UNSIGNED NULL,

    -- Pareja
    tengo_pareja TINYINT(1) NOT NULL DEFAULT 0,
    hora_nacimiento_pareja TIME NULL,
    dia_nacimiento_pareja TINYINT UNSIGNED NULL,
    mes_nacimiento_pareja TINYINT UNSIGNED NULL,
    anio_nacimiento_pareja SMALLINT UNSIGNED NULL,

    -- Salud
    enfermedades_anio TEXT NULL,

    -- Situación financiera
    situacion_financiera ENUM('Buena', 'Regular', 'Mala') NOT NULL,

    -- Situación laboral
    situacion_laboral ENUM('Desempleado', 'Empleado', 'Empresario') NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Un usuario -> un solo registro de datos personales
    UNIQUE KEY uq_datos_personales_usuario (id_usuario),
    KEY idx_datos_personales_usuario (id_usuario),

    CONSTRAINT fk_datos_personales_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuarios(id_usuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    -- Validaciones (si tu versión las aplica)
    CONSTRAINT chk_dia_nacimiento
        CHECK (dia_nacimiento IS NULL OR dia_nacimiento BETWEEN 1 AND 31),
    CONSTRAINT chk_mes_nacimiento
        CHECK (mes_nacimiento IS NULL OR mes_nacimiento BETWEEN 1 AND 12),
    CONSTRAINT chk_anio_nacimiento
        CHECK (anio_nacimiento IS NULL OR anio_nacimiento BETWEEN 1900 AND 2100),

    CONSTRAINT chk_dia_nacimiento_pareja
        CHECK (dia_nacimiento_pareja IS NULL OR dia_nacimiento_pareja BETWEEN 1 AND 31),
    CONSTRAINT chk_mes_nacimiento_pareja
        CHECK (mes_nacimiento_pareja IS NULL OR mes_nacimiento_pareja BETWEEN 1 AND 12),
    CONSTRAINT chk_anio_nacimiento_pareja
        CHECK (anio_nacimiento_pareja IS NULL OR anio_nacimiento_pareja BETWEEN 1900 AND 2100)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_spanish_ci;
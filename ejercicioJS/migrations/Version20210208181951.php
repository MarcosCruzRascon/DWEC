<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210208181951 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE mensajes (id INT AUTO_INCREMENT NOT NULL, usuarioenvia_id INT NOT NULL, usuariorecibe_id INT NOT NULL, idmensaje INT NOT NULL, mensaje LONGTEXT NOT NULL, fecha_hora DATETIME NOT NULL, imagen TINYINT(1) NOT NULL, estado INT NOT NULL, INDEX IDX_6C929C80780D7A90 (usuarioenvia_id), INDEX IDX_6C929C8085F9D10F (usuariorecibe_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuarios (id INT AUTO_INCREMENT NOT NULL, telefono VARCHAR(9) NOT NULL, nombre VARCHAR(45) NOT NULL, foto LONGBLOB DEFAULT NULL, ultimoacceso DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuarios_usuarios (usuarios_source INT NOT NULL, usuarios_target INT NOT NULL, INDEX IDX_FC6CCBDE714645AE (usuarios_source), INDEX IDX_FC6CCBDE68A31521 (usuarios_target), PRIMARY KEY(usuarios_source, usuarios_target)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE mensajes ADD CONSTRAINT FK_6C929C80780D7A90 FOREIGN KEY (usuarioenvia_id) REFERENCES usuarios (id)');
        $this->addSql('ALTER TABLE mensajes ADD CONSTRAINT FK_6C929C8085F9D10F FOREIGN KEY (usuariorecibe_id) REFERENCES usuarios (id)');
        $this->addSql('ALTER TABLE usuarios_usuarios ADD CONSTRAINT FK_FC6CCBDE714645AE FOREIGN KEY (usuarios_source) REFERENCES usuarios (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE usuarios_usuarios ADD CONSTRAINT FK_FC6CCBDE68A31521 FOREIGN KEY (usuarios_target) REFERENCES usuarios (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mensajes DROP FOREIGN KEY FK_6C929C80780D7A90');
        $this->addSql('ALTER TABLE mensajes DROP FOREIGN KEY FK_6C929C8085F9D10F');
        $this->addSql('ALTER TABLE usuarios_usuarios DROP FOREIGN KEY FK_FC6CCBDE714645AE');
        $this->addSql('ALTER TABLE usuarios_usuarios DROP FOREIGN KEY FK_FC6CCBDE68A31521');
        $this->addSql('DROP TABLE mensajes');
        $this->addSql('DROP TABLE usuarios');
        $this->addSql('DROP TABLE usuarios_usuarios');
    }
}

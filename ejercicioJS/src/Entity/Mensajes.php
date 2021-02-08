<?php

namespace App\Entity;

use App\Repository\MensajesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MensajesRepository::class)
 */
class Mensajes
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $idmensaje;

    /**
     * @ORM\Column(type="text")
     */
    private $mensaje;

    /**
     * @ORM\Column(type="datetime")
     */
    private $fechaHora;

    /**
     * @ORM\Column(type="boolean")
     */
    private $imagen;

    /**
     * @ORM\Column(type="integer")
     */
    private $estado;

    /**
     * @ORM\ManyToOne(targetEntity=Usuarios::class, inversedBy="mensajesenviados")
     * @ORM\JoinColumn(nullable=false)
     */
    private $usuarioenvia;

    /**
     * @ORM\ManyToOne(targetEntity=Usuarios::class, inversedBy="mensajesrecibidos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $usuariorecibe;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdmensaje(): ?int
    {
        return $this->idmensaje;
    }

    public function setIdmensaje(int $idmensaje): self
    {
        $this->idmensaje = $idmensaje;

        return $this;
    }

    public function getMensaje(): ?string
    {
        return $this->mensaje;
    }

    public function setMensaje(string $mensaje): self
    {
        $this->mensaje = $mensaje;

        return $this;
    }

    public function getFechaHora(): ?\DateTimeInterface
    {
        return $this->fechaHora;
    }

    public function setFechaHora(\DateTimeInterface $fechaHora): self
    {
        $this->fechaHora = $fechaHora;

        return $this;
    }

    public function getImagen(): ?bool
    {
        return $this->imagen;
    }

    public function setImagen(bool $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getEstado(): ?int
    {
        return $this->estado;
    }

    public function setEstado(int $estado): self
    {
        $this->estado = $estado;

        return $this;
    }

    public function getUsuarioenvia(): ?Usuarios
    {
        return $this->usuarioenvia;
    }

    public function setUsuarioenvia(?Usuarios $usuarioenvia): self
    {
        $this->usuarioenvia = $usuarioenvia;

        return $this;
    }

    public function getUsuariorecibe(): ?Usuarios
    {
        return $this->usuariorecibe;
    }

    public function setUsuariorecibe(?Usuarios $usuariorecibe): self
    {
        $this->usuariorecibe = $usuariorecibe;

        return $this;
    }
}

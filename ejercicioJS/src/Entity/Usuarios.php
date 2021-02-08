<?php

namespace App\Entity;

use App\Repository\UsuariosRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UsuariosRepository::class)
 */
class Usuarios
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=9)
     */
    private $telefono;

    /**
     * @ORM\Column(type="string", length=45)
     */
    private $nombre;

    /**
     * @ORM\Column(type="blob", nullable=true)
     */
    private $foto;

    /**
     * @ORM\Column(type="datetime")
     */
    private $ultimoacceso;

    /**
     * @ORM\ManyToMany(targetEntity=Usuarios::class, inversedBy="contactos")
     */
    private $contactos;

    /**
     * @ORM\OneToMany(targetEntity=Mensajes::class, mappedBy="usuarioenvia", orphanRemoval=true)
     */
    private $mensajesenviados;

    /**
     * @ORM\OneToMany(targetEntity=Mensajes::class, mappedBy="usuariorecibe", orphanRemoval=true)
     */
    private $mensajesrecibidos;

    public function __construct()
    {
        $this->contactos = new ArrayCollection();
        $this->mensajesenviados = new ArrayCollection();
        $this->mensajesrecibidos = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTelefono(): ?string
    {
        return $this->telefono;
    }

    public function setTelefono(string $telefono): self
    {
        $this->telefono = $telefono;

        return $this;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;

        return $this;
    }

    public function getFoto()
    {
        return $this->foto;
    }

    public function setFoto($foto): self
    {
        $this->foto = $foto;

        return $this;
    }

    public function getUltimoacceso(): ?\DateTimeInterface
    {
        return $this->ultimoacceso;
    }

    public function setUltimoacceso(\DateTimeInterface $ultimoacceso): self
    {
        $this->ultimoacceso = $ultimoacceso;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getContactos(): Collection
    {
        return $this->contactos;
    }

    public function addContacto(self $contacto): self
    {
        if (!$this->contactos->contains($contacto)) {
            $this->contactos[] = $contacto;
        }

        return $this;
    }

    public function removeContacto(self $contacto): self
    {
        $this->contactos->removeElement($contacto);
        return $this;
    }

    /**
     * @return Collection|Mensajes[]
     */
    public function getMensajesenviados(): Collection
    {
        return $this->mensajesenviados;
    }

    public function addMensajesenviado(Mensajes $mensajesenviado): self
    {
        if (!$this->mensajesenviados->contains($mensajesenviado)) {
            $this->mensajesenviados[] = $mensajesenviado;
            $mensajesenviado->setUsuarioenvia($this);
        }

        return $this;
    }

    public function removeMensajesenviado(Mensajes $mensajesenviado): self
    {
        if ($this->mensajesenviados->removeElement($mensajesenviado)) {
            // set the owning side to null (unless already changed)
            if ($mensajesenviado->getUsuarioenvia() === $this) {
                $mensajesenviado->setUsuarioenvia(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Mensajes[]
     */
    public function getMensajesrecibidos(): Collection
    {
        return $this->mensajesrecibidos;
    }

    public function addMensajesrecibido(Mensajes $mensajesrecibido): self
    {
        if (!$this->mensajesrecibidos->contains($mensajesrecibido)) {
            $this->mensajesrecibidos[] = $mensajesrecibido;
            $mensajesrecibido->setUsuariorecibe($this);
        }

        return $this;
    }

    public function removeMensajesrecibido(Mensajes $mensajesrecibido): self
    {
        if ($this->mensajesrecibidos->removeElement($mensajesrecibido)) {
            // set the owning side to null (unless already changed)
            if ($mensajesrecibido->getUsuariorecibe() === $this) {
                $mensajesrecibido->setUsuariorecibe(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Form;

use App\Entity\Mensajes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MensajesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('idmensaje')
            ->add('mensaje')
            ->add('fechaHora')
            ->add('imagen')
            ->add('estado')
            ->add('usuarioenvia')
            ->add('usuariorecibe')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Mensajes::class,
        ]);
    }
}

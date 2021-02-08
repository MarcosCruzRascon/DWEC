<?php

namespace App\Controller;

use App\Entity\Mensajes;
use App\Form\MensajesType;
use App\Repository\MensajesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/mensajes")
 */
class MensajesController extends AbstractController
{
    /**
     * @Route("/", name="mensajes_index", methods={"GET"})
     */
    public function index(MensajesRepository $mensajesRepository): Response
    {
        return $this->render('mensajes/index.html.twig', [
            'mensajes' => $mensajesRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="mensajes_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $mensaje = new Mensajes();
        $form = $this->createForm(MensajesType::class, $mensaje);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($mensaje);
            $entityManager->flush();

            return $this->redirectToRoute('mensajes_index');
        }

        return $this->render('mensajes/new.html.twig', [
            'mensaje' => $mensaje,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="mensajes_show", methods={"GET"})
     */
    public function show(Mensajes $mensaje): Response
    {
        return $this->render('mensajes/show.html.twig', [
            'mensaje' => $mensaje,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="mensajes_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Mensajes $mensaje): Response
    {
        $form = $this->createForm(MensajesType::class, $mensaje);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('mensajes_index');
        }

        return $this->render('mensajes/edit.html.twig', [
            'mensaje' => $mensaje,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="mensajes_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Mensajes $mensaje): Response
    {
        if ($this->isCsrfTokenValid('delete'.$mensaje->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($mensaje);
            $entityManager->flush();
        }

        return $this->redirectToRoute('mensajes_index');
    }
}

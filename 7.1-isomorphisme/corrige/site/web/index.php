<?php

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

error_reporting(E_ALL);
ini_set('display_errors','On');
$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_mysql',
        'host'      => 'localhost',
        'dbname'    => 'react_youtube',
        'user'      => 'react_youtube',
        'password'  => 'react_youtube',
        'charset'   => 'utf8',
    ),
));

$app->register(new Silex\Provider\TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/../views',
));


$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
});
$app->get('/videos', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
});
$app->get('/videos/{id}', function () use ($app) {
    return $app['twig']->render('index.html.twig', array());
});

$app->get('/api/videos', function () use ($app) {
	return $app->json($app['db']->fetchAll('SELECT * FROM video WHERE 1 ORDER BY id DESC'))->setEncodingOptions(JSON_NUMERIC_CHECK);
});

$app->post('/api/videos', function (Request $request) use ($app) {
    if ($request->files->count() && $request->files->getIterator()->current())
    {
        $file = $request->files->getIterator()->current();
        $path = __DIR__.'/../web/uploads/';
        $filename = $file->getClientOriginalName();
        $fileMoved = $file->move($path,$filename);
        $video = array(
            'file' => $filename,
            'title' => $request->get('title'),
            'description' => $request->get('description')
        );
        if ($fileMoved && $app['db']->insert('video', $video))
        {
        	$video['id'] = $app['db']->lastInsertId();
            return $app->json($video);
        }
    }
    return $app->json(0, 400);
});

$app->get('/api/videos/{id}', function ($id) use ($app) {
    return $app->json($app['db']->fetchAssoc('SELECT * FROM video WHERE id = ?', array((int) $id)));
});

$app->post('/api/videos/{id}/comments', function (Request $request, $id) use ($app) {
    $comment = array(
        'video_id' => (int) $id,
        'content' => $request->get('content')
    );
    if ($app['db']->insert('comment', $comment))
    {
        return $app->json($comment);
    }
    return $app->json(0, 400);
});

$app->get('/api/videos/{id}/comments', function (Request $request, $id) use ($app) {
	return $app->json($app['db']->fetchAll('SELECT * FROM comment WHERE video_id = ? ORDER BY created_at DESC', array((int) $id)));
});

$app->post('/api/videos/{id}/likes', function ($id) use ($app) {
    if ($app['db']->update('video', array('likes' => 1, 'dislikes' => 0), array('id' => (int) $id)))
    {
        return $app->json(1);
    }
    return $app->json(0, 400);
});

$app->post('/api/videos/{id}/dislikes', function ($id) use ($app) {
    if ($app['db']->update('video', array('likes' => 0, 'dislikes' => 1), array('id' => (int) $id)))
    {
        return $app->json(1);
    }
    return $app->json(0, 400);
});

$app->after(function (Request $request, Response $response) {
    $response->headers->set('Access-Control-Allow-Origin', '*');
});

$app->run();
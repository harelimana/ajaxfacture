<?php

$articles = array(
    'article1' => array(
        'marque' => 'stop dust',
        'nom' => 'aspirateur 5000',
        'prix' => '150'
    ),
    'article2' => array(
        'marque' => 'toupropre',
        'nom' => 'machine à lessiver 2000',
        'prix' => '500'
    ),
    'article3' => array(
        'marque' => 'vitaminix',
        'nom' => 'blender 1000',
        'prix' => '250'
    ),
    'article4' => array(
        'marque' => 'hal computer',
        'nom' => 'peer',
        'prix' => '1500'
    )
);

echo json_encode($articles);

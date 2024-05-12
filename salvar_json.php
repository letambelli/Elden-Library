<?php
// Recebe os dados enviados via POST
$jsonData = file_get_contents('php://input');

// Caminho do arquivo JSON onde os dados serão salvos
$arquivoJSON = 'pessoas.json';

// Salva os dados no arquivo JSON
file_put_contents($arquivoJSON, $jsonData);

// Responde com uma mensagem de sucesso
echo 'Dados salvos com sucesso em ' . $arquivoJSON;
?>
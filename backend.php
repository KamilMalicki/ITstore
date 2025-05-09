header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

if (file_put_contents('products.json', json_encode($data['products'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Błąd zapisu']);
}
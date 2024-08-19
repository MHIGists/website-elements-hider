document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('saveButton').addEventListener('click', function () {
    var elementsInput = document.getElementById('elements').value;
    var elementsArray = elementsInput.split(';').map(element => element.trim()).filter(Boolean);

    var data = { elements: elementsArray };
    var jsonData = JSON.stringify(data);

    var blob = new Blob([jsonData], { type: 'application/json' });
    var url = URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = 'hidden-elements.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  });
});

var tmpJsonFile = JSON.parse('[{"gtin":"0000000000123","outpan_url":"https://www.outpan.com/view_product.php?barcode\u003d0000000000123","name":"I-Vapor Vaporizer","attributes":{"Manufacturer":"I Vapor"},"images":[],"categories":[],"amount":9},{"gtin":"0793573956217","outpan_url":"https://www.outpan.com/view_product.php?barcode\u003d0793573956217","name":"Wowbab BIO-Getreideriegel sizilianische Zitrone","attributes":{},"images":[],"categories":["Sweets"],"amount":14},{"gtin":"0000042143482","outpan_url":"https://www.outpan.com/view_product.php?barcode\u003d0000042143482","name":"San Benedetto Aqua Mineral Naturale","attributes":{"Package Contents":"6","Price":"0,39€","Volume":"1.5 L","Manufacturer":"San Benedetto"},"images":["https://outpan-images.s3.amazonaws.com/gb98rm20qf-0000042143482.jpg","https://outpan-images.s3.amazonaws.com/2egqomih82-0000042143482.jpg","https://outpan-images.s3.amazonaws.com/gzp76n2jrp-0000042143482.jpg"],"categories":["Mineral Water","Water"],"amount":1},{"gtin":"5053990110261","outpan_url":"https://www.outpan.com/view_product.php?barcode\u003d5053990110261","name":"Pringles Tortilla Chips Nacho Cheese","attributes":{},"images":[],"categories":[],"amount":18}]');


var i = 0;

$("#clickMeBtn").click(function() {
    
    if(i >= tmpJsonFile.length) {
        i = 0;
    }
    
   $("#jsonDiv").html(tmpJsonFile[i++].name);
});
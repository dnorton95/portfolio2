$(function () {
    var $orders = $('#orders');

    $.ajax({
        type: 'GET',
        url: 'https://api.sampleapis.com/beers/ale',
        success: function (orders) {
            $.each(orders, function (i, order) {
                // Use an img tag to display the image
                $orders.append('<h2 id="beer">Beer: ' + order.name + '</h2>  <p id="price"> Price: ' + order.price + ' </p>  <p>' + '<img id="img" src="' + order.image + '" alt="' + order.name + ' Image"> </p> ');
            });
        }
    });
});

$(function () {
    var $orders = $('#orders');

    $.ajax({
        type: 'GET',
        url: 'https://api.sampleapis.com/beers/ale',
        success: function (orders) {
            // Save the original orders data for filtering
            var originalOrders = orders;

            // Function to filter and display orders based on search input
            function displayOrders(searchTerm) {
                $orders.empty(); // Clear existing content

                // Use filter to find matching orders
                var filteredOrders = originalOrders.filter(function (order) {
                    return order.name.toLowerCase().includes(searchTerm.toLowerCase());
                });

                // Display the filtered orders
                $.each(filteredOrders, function (i, order) {
                    $orders.append('<h2 id="beer">Beer: ' + order.name + '</h2>  <p id="price"> Price: ' + order.price + ' </p>  <p>' + '<img id="img" src="' + order.image + '" alt="' + order.name + ' Image"> </p> ');
                });
            }

            // Initial display of all orders
            displayOrders('');

            // Autocomplete functionality using jQuery UI
            $('#searchInput').autocomplete({
                source: originalOrders.map(function (order) {
                    return order.name;
                }),
                minLength: 1,
                select: function (event, ui) {
                    displayOrders(ui.item.value);
                }
            });
        }
    });
});

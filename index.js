"use strict"

// filter button ids
let totalButtonRef = document.getElementById('total-btn');
let goldButtonRef = document.getElementById('gold-btn');
let silverButtonRef = document.getElementById('silver-btn');
let bronzeButtonRef = document.getElementById('bronze-btn');


// initial graphs
var total_map = "graphs/total_map.json";
vegaEmbed("#map", total_map, {"actions": false}).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var hosts = "graphs/hosts.json";
vegaEmbed("#hosts", hosts, {"actions": false}).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var hosts_map = "graphs/map_hosts.json";
vegaEmbed("#hosts-map", hosts_map, {"actions": false}).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var top10 = "graphs/top10_total.json";
vegaEmbed("#top10", top10, {"actions": false}).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var sports = "graphs/sports.json";
vegaEmbed("#sports", sports, {"actions": false}).then(function(result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// other medal graphs
var gold_map = "graphs/gold_map.json";
var silver_map = "graphs/silver_map.json";
var bronze_map = "graphs/bronze_map.json";

goldButtonRef.addEventListener('click', function() {
    vegaEmbed("#map", gold_map, {"actions": false}).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
});
silverButtonRef.addEventListener('click', function() {
    vegaEmbed("#map", silver_map, {"actions": false}).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
});
bronzeButtonRef.addEventListener('click', function() {
    vegaEmbed("#map", bronze_map, {"actions": false}).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
});
totalButtonRef.addEventListener('click', function() {
    vegaEmbed("#map", total_map, {"actions": false}).then(function(result) {
        // Access the Vega view instance
        //(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
});

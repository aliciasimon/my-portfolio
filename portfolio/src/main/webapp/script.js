// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
* Fetch the JSON string from the server
*/
function getJsonString(){
    console.log("Fetching JSON String from server...");
    fetch('/data').then(response => response.json()).then((comment) => comment.forEach(comment)){
        const myComment = document.getElementById('comment-section');
        myComment.innerHTML= "";
    }
}

/**
* Google Maps API
 */
var map;
function initMap() {
    // Creating a StyledMap object and passing an array of styles into it
    // Displays a 'Styled Map' button at the top of the map that the user can click to view
    var styledMapType = new google.maps.StyledMapType( // code for 'Dark Mode' from the Maps JavaScript API Styling Document
        [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
        ],
        {name: 'Dark Mode'});


    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 30.005417, lng: -91.818665}, 
        zoom: 9,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap','satellite','styled_map']
        }
  });

  //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // New Iberia Marker
    var new_iberia = {lat: 30.005417, lng: -91.818665};
    marker = new google.maps.Marker({position: new_iberia, map: map, animation: google.maps.Animation.DROP, draggable: true, title:"Drag Me!"});

    // XULA Marker 
    var new_orleans = {lat: 29.9652, lng: -90.1070};
    marker2 = new google.maps.Marker({position: new_orleans, map: map, animation: google.maps.Animation.DROP});
    
    // Lafayette Marker 
    var lafayette = {lat: 30.2241, lng: -92.0198};
    marker3 = new google.maps.Marker({position: lafayette, map: map, animation: google.maps.Animation.DROP});

    // Creating content for info window
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">New Iberia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>New Iberia</b>, my hometown, is the largest city in, and parish seat of, Iberia Parish, Louisiana, United States.'+ 
      'It is located 21 miles southeast of Lafayette' + 'New Iberia dates from mid-1779,'+
      ' when a group of some 500 Malagueños colonists from Spain, led by Lt.Col. Francisco Bouligny, '+
      'came up Bayou Teche and settled around what became known'+ 
      'Spanish Lake (because they were the first Europeans to settle here).' + 
      'In 1814, a decade after the United States acquired the territory in the Louisiana Purchase, '+
      'the federal government opened a post office here. '+
      'It was officially known as "New Iberia," '+
      'but postmarks of the time show that the town was being called "Nova Iberia" (with Latin for "new"). '+
      'The town was incorporated as "Iberia" in 1839; the state legislature resolved the situation in 1847, '+
      'naming the town New Iberia.</p>'+
      '<p>Attribution: New Iberia <a href="https://en.wikipedia.org/wiki/New_Iberia,_Louisiana</a> '+
      '</p>'+
      '</div>'+
      '</div>';


    // Creating InfoWindow Object
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    // when the user hovers over the marker, the info window opens
    marker.addListener('mouseover', function() {
        infowindow.open(map, marker);
    });

    // when the user stops hovering over the marker, the info window closes
    marker.addListener('mouseout', function() {
        infowindow.close(map, marker);
    });
}

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

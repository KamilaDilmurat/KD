    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
	   "esri/widgets/Home",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "dojo/domReady!"
      
    ], function(WebScene, SceneView, Camera,Legend,LayerList, Home) {
    
 
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"001215337f694fb4a44264582520d507" 
        }
      });
      
      var camera = new Camera({
        position: [
           87.59,// lon
          43.80, // lat
          2500// elevation in meters
        ],
        tilt:45,
        heading: 180
      })
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera
    });
	
	var homeBtn = new Home({
        view: view
      });
      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
   


    });
view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(1);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "camp sites"
          }]
        });
      
   view.ui.add(legend, "bottom-right");
   view.ui.add(layerList, "bottom-right");
   });
var layerList = new LayerList({
  view: view
});

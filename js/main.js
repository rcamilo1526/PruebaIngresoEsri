require([
    "esri/Map",
    "esri/layers/FeatureLayer",
    "esri/views/MapView",
    "esri/widgets/Search"
  ], function(
    Map,
    FeatureLayer,
    MapView,
    Search
  ) {
    var map = new Map({
      basemap: "hybrid"
    });


    var view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 15,
      center: [-74.051524, 4.674911]
    });

    var template = {
      title: "Notaría",
      content: [{

        type: "fields",
        fieldInfos: [{
          fieldName: "NOTNUMNOT",
          label: "Número de notaría",
          visible: true
        },{
          fieldName: "NOTTELEFON",
          label: "Teléfono de la notaría",
          visible: true
        },
        {
          fieldName: "NOTDIRECCI",
          label: "Dirección de la notaría",
          visible: true
        },
        {
          fieldName: "NOTNNOTARI",
          label: "Nombre del notario",
          visible: true
        },
        {
          fieldName: "NOTHAPUBLI",
          label: "Horario de Atención al Público",
          visible: true
        },
        {
          fieldName: "NOTCINSTIT",
          label: "Correo Institucional",
          visible: true
        }]


      }]


    };

    var featureLayer = new FeatureLayer({
      url: "http://serviciosgis.catastrobogota.gov.co/arcgis/rest/services/sitiosinteres/notarias/MapServer/0",
      outFields: ["*"],
      popupTemplate: template
    });
    map.add(featureLayer);
    //Añadir barra de busqueda
    view.ui.add(new Search({
      view: view
    }), "bottom-left");
  });

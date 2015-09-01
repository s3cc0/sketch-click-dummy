var linkLayerPrefix = "linkto:";

function showLinkLayers () {
  return showOrHideLinkLayers(true);
}

function hideLinkLayers () {
  return showOrHideLinkLayers(false);
}

function toggleLinkLayers() {
  return showOrHideLinkLayers (-1);
}

function layerFrameRelativeToArtboard(layer, artboard) {

  var frame = {};
  frame.x = (artboard.absoluteRect().x() - layer.absoluteRect().x()) * -1.0;
  frame.y = (artboard.absoluteRect().y() - layer.absoluteRect().y()) * -1.0;

  return frame;

}

function showOrHideLinkLayers (shouldShowLayers) {
  var layers = doc.currentPage().children().objectEnumerator();
  while (layer = layers.nextObject()) {

    var name = layer.name();
    if (name == linkLayerPrefix || name.indexOf(linkLayerPrefix) != -1) {

      if (shouldShowLayers === -1) {
        // decide whether to hide or show all layers, based on the visibility of the first layer we find
        shouldShowLayers = ![layer isVisible];
      }

      [layer setIsVisible:shouldShowLayers];
    }
  }
  return shouldShowLayers;
}
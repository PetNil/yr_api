//  -- Ger en verbal angivelse av vindriktningen, typ NordNordVäst, utifrån ett siffervärde. --
function compassRose(n) {
  var grad = n;
  if (grad <= 11.25 || grad > 337.5 + 11.25) {
    return "Nord";
  }
  if (grad > 315 + 11.25) {
    return "NordNordVäst";
  }
  if (grad > 292.5 + 11.25) {
    return "NordVäst";
  }
  if (grad > 270 + 11.25) {
    return "VästNordVäst";
  }
  if (grad > 247.5 + 11.25) {
    return "Väst";
  }
  if (grad > 225 + 11.25) {
    return "VästSydVäst";
  }
  if (grad > 202.5 + 11.25) {
    return "SydVäst";
  }
  if (grad > 180 + 11.25) {
    return "SydSydVäst";
  }
  if (grad > 157.5 + 11.25) {
    return "Syd";
  }
  if (grad > 135 + 11.25) {
    return "SydSydOst";
  }
  if (grad > 112.5 + 11.25) {
    return "SydOst";
  }
  if (grad > 90 + 11.25) {
    return "OstSydOst";
  }
  if (grad > 67.5 + 11.25) {
    return "Ost";
  }
  if (grad > 45 + 11.25) {
    return "OstNordOst";
  }
  if (grad > 22.5 + 11.25) {
    return "NordOst";
  } else {
    return "NordNordOst";
  }
}

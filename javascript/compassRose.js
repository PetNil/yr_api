//  -- Ger en verbal angivelse av vindriktningen, typ NordNordVäst, utifrån ett siffervärde. --
function compassRose(n) {
  var grad = n;
  if (grad <= 11.25 || grad > 337.5 + 11.25) {
    return "N";
  }
  if (grad > 315 + 11.25) {
    return "NNV";
  }
  if (grad > 292.5 + 11.25) {
    return "NV";
  }
  if (grad > 270 + 11.25) {
    return "VNV";
  }
  if (grad > 247.5 + 11.25) {
    return "V";
  }
  if (grad > 225 + 11.25) {
    return "VSV";
  }
  if (grad > 202.5 + 11.25) {
    return "SV";
  }
  if (grad > 180 + 11.25) {
    return "SSV";
  }
  if (grad > 157.5 + 11.25) {
    return "S";
  }
  if (grad > 135 + 11.25) {
    return "SSO";
  }
  if (grad > 112.5 + 11.25) {
    return "SO";
  }
  if (grad > 90 + 11.25) {
    return "OSO";
  }
  if (grad > 67.5 + 11.25) {
    return "O";
  }
  if (grad > 45 + 11.25) {
    return "ONO";
  }
  if (grad > 22.5 + 11.25) {
    return "NO";
  } else {
    return "NNO";
  }
}

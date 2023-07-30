function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".color_circle" + shadowSelector + "{height: 50px;width: 50px;display: block;border-radius: 50%;cursor: pointer;}.ignite_red" + shadowSelector + " {background: linear-gradient(135deg, rgb(228, 26, 44) 24%, rgb(163, 2, 14) 62%, rgb(228, 26, 44) 62%, rgb(228, 26, 44) 62%, rgb(228, 26, 44) 100%);}.sporty_blue" + shadowSelector + " {background: linear-gradient(135deg, rgb(0, 117, 217) 24%, rgb(0, 53, 192) 62%, rgb(0, 117, 217) 62%, rgb(0, 117, 217) 62%, rgb(0, 117, 217) 100%);}.crystal_black" + shadowSelector + " {background: linear-gradient(135deg, rgb(48, 48, 48) 24%, rgb(26, 26, 27) 62%, rgb(48, 48, 48) 62%, rgb(48, 48, 48) 62%, rgb(48, 48, 48) 100%);}.platinum_white" + shadowSelector + " {background: linear-gradient(135deg, rgb(234, 234, 233) 24%, rgb(197, 198, 192) 62%, rgb(234, 234, 233) 62%, rgb(234, 234, 233) 62%, rgb(234, 234, 233) 100%);}input[type=\"radio\"]:checked" + shadowSelector + "+label" + shadowSelector + "{border: 5px solid#ffc200;}input[type=\"radio\"]:checked" + shadowSelector + "+label" + shadowSelector + "+div" + shadowSelector + "{color:#ffc200;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];
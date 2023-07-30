import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./carDetails.html";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class CarDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this._selectedVariant = {};
  }
  get selectedVariant() {
    return this._selectedVariant;
  }
  set selectedVariant(data) {
    if (data) {
      let model = data.variant.toLowerCase().replaceAll(' ', '');
      let selectedimage = `/public/assets/honda/${model}/${data.imageName}.png`;
      console.log("selectedimage", selectedimage);
      this._selectedVariant = _objectSpread(_objectSpread({}, data), {}, {
        "selectedimage": selectedimage
      });
    }
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(CarDetails, {
  publicProps: {
    selectedVariant: {
      config: 3
    }
  },
  fields: ["_selectedVariant"]
});
export default _registerComponent(CarDetails, {
  tmpl: _tmpl,
  sel: "components-car-details",
  apiVersion: 59
});
import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./buildAndPrice.html";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const CRV_VARIANTS = [{
  variant: "VTi",
  price: 38900,
  formattedPrice: "$38,900",
  fuelConsumption: 7,
  seatingCapacity: 5,
  allowWheels: 17,
  checked: true,
  imageName: "ignite_red"
}, {
  variant: "VTi 7",
  formattedPrice: "$40,900",
  price: 40900,
  fuelConsumption: 7.3,
  seatingCapacity: 7,
  allowWheels: 17,
  imageName: "ignite_red"
}, {
  variant: "VTi X",
  formattedPrice: "$41,900",
  price: 41900,
  fuelConsumption: 7.3,
  seatingCapacity: 5,
  allowWheels: 18,
  imageName: "ignite_red"
}, {
  variant: "VTi LX AWD",
  formattedPrice: "$53,600",
  price: 53600,
  fuelConsumption: 7.4,
  seatingCapacity: 5,
  allowWheels: 19,
  imageName: "ignite_red"
}];

// Define the colors available for the car
const COLORS = [{
  label: "Ignite Red (Metallic)",
  value: "ignite_red",
  checked: true
}, {
  label: "Brilliant Sporty Blue",
  value: "sporty_blue"
}, {
  label: "Crystal Black",
  value: "crystal_black"
}, {
  label: "Platinum White (Pearlescent)",
  value: "platinum_white"
}];
const ANIMATED_STARTING_PRICE = 38000;
class BuildAndPrice extends LightningElement {
  constructor(...args) {
    super(...args);
    this.showModal = false;
    this.crvVariants = CRV_VARIANTS;
    this.colorsList = COLORS;
    this.selectedVariant = CRV_VARIANTS[0];
    this.selectedPrice = this.selectedVariant.price;
    this.selectedImageName = this.colorsList[0].value;
    this.selectedColorName = this.colorsList[0].label;
    this.animatedPriceValue = void 0;
  }
  // on page load
  connectedCallback() {
    this.animatePrice();
  }

  //Handler for when a variant is selected
  selectionHandler(event) {
    console.log("selected record", event.detail.selected);
    console.log("selected variant", event.detail.variant);
    const {
      selected,
      variant
    } = event.detail;
    this.selectedVariant = _objectSpread(_objectSpread({}, selected), {}, {
      imageName: this.selectedImageName
    });
    this.selectedPrice = this.selectedVariant.price;
    this.updateVariants(variant);
    this.animatePrice();
  }
  //Handler for when a color is selected
  colorSelectionHandler(event) {
    console.log("selected color", event.detail);
    this.selectedImageName = event.detail;
    this.selectedVariant = _objectSpread(_objectSpread({}, this.selectedVariant), {}, {
      imageName: this.selectedImageName
    });
    this.updateColors(this.selectedImageName);
  }

  // update the checked property for the colors based on the selected value
  updateColors(value) {
    this.colorsList = this.colorsList.map(item => {
      let checked = item.value === value;
      if (checked) {
        this.selectedColorName = item.label;
      }
      return _objectSpread(_objectSpread({}, item), {}, {
        checked
      });
    });
  }

  // Update the checked property for the variants based on the selected variant
  updateVariants(value) {
    this.crvVariants = this.crvVariants.map(item => {
      let checked = item.variant === value;
      return _objectSpread(_objectSpread({}, item), {}, {
        checked
      });
    });
  }

  //open the modal 
  openModalHandler() {
    this.showModal = true;
  }
  cancelHandler() {
    this.showModal = false;
  }
  submitHander() {
    console.log("Form Submitted!!");
    this.template.querySelector('components-lead-form').formSubmit();
  }
  get description() {
    return `Customer is looking for CRV ${this.selectedVariant.variant} of color ${this.selectedColorName}`;
  }

  //method to animate the price
  animatePrice() {
    this.animatedPriceValue = ANIMATED_STARTING_PRICE;
    let interval = window.setInterval(() => {
      if (this.selectedPrice !== this.animatedPriceValue) {
        this.animatedPriceValue = this.animatedPriceValue + 100;
      } else {
        window.clearInterval(interval);
      }
    }, 10);
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(BuildAndPrice, {
  fields: ["showModal", "crvVariants", "colorsList", "selectedVariant", "selectedPrice", "selectedImageName", "selectedColorName", "animatedPriceValue"]
});
export default _registerComponent(BuildAndPrice, {
  tmpl: _tmpl,
  sel: "pages-build-and-price",
  apiVersion: 59
});
import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./leadForm.html";
class LeadForm extends LightningElement {
  constructor(...args) {
    super(...args);
    this.description = '';
  }
  formSubmit() {
    this.template.querySelector('input[type="submit"]').click();
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(LeadForm, {
  publicProps: {
    description: {
      config: 0
    }
  },
  publicMethods: ["formSubmit"]
});
export default _registerComponent(LeadForm, {
  tmpl: _tmpl,
  sel: "components-lead-form",
  apiVersion: 59
});
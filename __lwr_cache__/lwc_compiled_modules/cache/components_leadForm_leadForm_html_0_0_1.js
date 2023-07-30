import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./leadForm.css";

import _implicitScopedStylesheets from "./leadForm.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<input type="hidden" name="oid" value="00D5i00000DSKFm"${3}>`;
const $fragment2 = parseFragment`<input type="hidden" name="retURL" value="https://cosmic-horse-9ab199.netlify.app/"${3}>`;
const $fragment3 = parseFragment`<input type="submit" name="submit" class="slds-hide${0}"${2}>`;
const stc0 = {
  attrs: {
    "action": "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
    "method": "POST"
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-form-element": true
  },
  key: 5
};
const stc2 = {
  "slds-form-element__label": true
};
const stc3 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 7
};
const stc4 = {
  "slds-input": true
};
const stc5 = {
  classMap: {
    "slds-form-element": true
  },
  key: 9
};
const stc6 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 11
};
const stc7 = {
  classMap: {
    "slds-form-element": true
  },
  key: 13
};
const stc8 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 15
};
const stc9 = {
  classMap: {
    "slds-form-element": true
  },
  key: 17
};
const stc10 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 19
};
const stc11 = {
  classMap: {
    "slds-form-element": true,
    "slds-hide": true
  },
  key: 21
};
const stc12 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 23
};
const stc13 = {
  "value": "Honda LWC"
};
const stc14 = {
  classMap: {
    "slds-form-element": true
  },
  key: 25
};
const stc15 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 27
};
const stc16 = {
  classMap: {
    "slds-form-element": true,
    "slds-hide": true
  },
  key: 29
};
const stc17 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 31
};
const stc18 = {
  "slds-textarea": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text} = $api;
  return [api_element("form", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4), api_element("div", stc1, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("title")
    },
    key: 6
  }, [api_text("Title")]), api_element("div", stc3, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("title"),
      "maxlength": "40",
      "name": "title",
      "size": "20",
      "required": ""
    },
    key: 8
  })])]), api_element("div", stc5, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("first_name")
    },
    key: 10
  }, [api_text("First Name")]), api_element("div", stc6, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("first_name"),
      "maxlength": "40",
      "name": "first_name",
      "size": "20",
      "required": ""
    },
    key: 12
  })])]), api_element("div", stc7, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("last_name")
    },
    key: 14
  }, [api_text("Last Name")]), api_element("div", stc8, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("last_name"),
      "maxlength": "80",
      "name": "last_name",
      "size": "20",
      "required": ""
    },
    key: 16
  })])]), api_element("div", stc9, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("email")
    },
    key: 18
  }, [api_text("Email")]), api_element("div", stc10, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("email"),
      "maxlength": "80",
      "name": "email",
      "size": "20",
      "required": ""
    },
    key: 20
  })])]), api_element("div", stc11, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("company")
    },
    key: 22
  }, [api_text("Company")]), api_element("div", stc12, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("company"),
      "maxlength": "40",
      "name": "company",
      "size": "20",
      "required": ""
    },
    props: stc13,
    key: 24
  })])]), api_element("div", stc14, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("city")
    },
    key: 26
  }, [api_text("City")]), api_element("div", stc15, [api_element("input", {
    classMap: stc4,
    attrs: {
      "type": "text",
      "id": api_scoped_id("city"),
      "maxlength": "40",
      "name": "city",
      "size": "20",
      "required": ""
    },
    key: 28
  })])]), api_element("div", stc16, [api_element("label", {
    classMap: stc2,
    attrs: {
      "for": api_scoped_id("description")
    },
    key: 30
  }, [api_text("Description")]), api_element("div", stc17, [api_element("textarea", {
    classMap: stc18,
    attrs: {
      "name": "description",
      "id": api_scoped_id("description"),
      "required": ""
    },
    key: 32
  }, [api_text(api_dynamic_text($cmp.description))])])]), api_static_fragment($fragment3(), 34)])];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6ioiujje6p5";
freezeTemplate(tmpl);

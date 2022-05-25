const Nito = {
  Component: class {
    constructor(props, cls) {
      this.props = props;
      this.state = [];
      this.classes = cls;
    }
  },

  CreateElement(type, props) {
    let elem = document.createElement(type);
    // console.log(elem);
    for (const key in props) {
      //   console.log(key);
      //   console.log(props[key]);
      if (Object.hasOwnProperty.call(props, key)) {
        const attr = document.createAttribute(key);
        attr.value = props[key];
        elem.setAttributeNode(attr);
        // console.log(attr);
      }
    }
    // console.log(elem);
    elem.innerText = props["text"];
    return elem;
  },
};

export default Nito;

class DynamicJS {

  #template = "";
  #mount;
  #unmount;
  #state;
  #element;

  /**
   * 
   * @param {string} element 
   * Valid css selector for element
   * 
   * @param {object} obj 
   * Object you want to link your element in dom with values
   * 
   * @param {Function?} mount 
   * Initializer function , Called everytime state changes. Event listeners needs to be added in here
   * 
   * @param {Function?} unmount 
   * Cleanup function, Event listeners needs to destroyed in here
   */
  constructor(element, obj, mount, unmount) {
    this.#element = document.querySelector(element);
    this.#state = obj;
    this.#template = this.#element.innerHTML;
    this.#setState();
    this.#mount = mount;
    this.#unmount = unmount;

    if (typeof this.#mount === "function")
      this.#mount();
  }


  #setState() {
    const obj = this.#state;
    this.#element.innerHTML = this.#template;
    Object.entries(obj).forEach(pair => {
      this.#element.innerHTML = this.#element.innerHTML.replaceAll('{{' + pair[0] + '}}', pair[1]);
    });
  }

  updateState = function (param) {
    const finalObj = {};
    if (typeof param === "function") {
      Object.assign(finalObj, param(this.#state));
    } else if (typeof param === "object") {
      Object.assign(finalObj, param);
    } else {
      throw Error("Called update state with invalid type");
    }

    Object.entries(finalObj).forEach(pair => {
      let key = pair[0];
      let value = pair[1];
      this.#state[key] = value;
    });

    if (typeof this.#unmount === "function")
      this.#unmount();

    this.#setState();

    if (typeof this.#mount === "function")
      this.#mount();
  }
}



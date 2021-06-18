class Template {
    #template = "";
    constructor(element, obj) {
      this.element = document.querySelector(element);
      this.state = obj;
      this.#template = this.element.innerHTML;
      this.setState();
    }
    setState() {
      const obj = this.state;
      this.element.innerHTML = this.#template;
      Object.entries(obj).forEach(pair => {
        this.element.innerHTML = this.element.innerHTML.replaceAll('{{'+ pair[0] +'}}', pair[1]);
      });
    }

    updateState = function (obj) {
      Object.entries(obj).forEach(pair=> {
        let key = pair[0];
        let value = pair[1];
        this.state[key] = value;
      });
      this.setState();
    }
  }

  
